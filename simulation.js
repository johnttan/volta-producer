var Producer = function(config){
  this.pricePerMWH = config.pricePerMWH;
  this.minCapacity = config.minCapacity;
  this.maxCapacity = config.maxCapacity;
  this.currCapacity = config.currCapacity;

  //PLEASE DEFINE 'reporter' OTHERWISE ERROR ON TESTING
  // reporter.register('production', function(){return this}.bind(this))
};

Producer.prototype.getSupply = function(){
  return {
    pricePerMWH: this.pricePerMWH,
    minCapacity: this.minCapacity,
    maxCapacity: this.maxCapacity,
    currCapacity: this.currCapacity
  };
};

Producer.prototype.setCapacity = function(data){
  var cap = {
    current: this.currCapacity
  };

  var capRequired = data.capacity;

  if (capRequired > this.maxCapacity){
    this.currCapacity = this.maxCapacity;
  }
  if (capRequired < this.minCapacity){
    this.currCapacity = this.minCapacity;
  }
  if (capRequired > this.minCapacity && capRequired < this.maxCapacity){
    this.currCapacity = capRequired - this.minCapacity;
  }
  return cap;
};

module.exports = Producer;
