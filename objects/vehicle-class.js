'use strict';

class Car {

  constructor(name, wheels) {
    this.name = name,
    this.wheels = wheels;
  };

  drive() {
    console.log('Moving Forward');
    return 'Moving Forward';
  };

  stop() {
    console.log('Stopping');
    return 'Stopping';
  };
  
};

// class Motorcycle extends Car
class Motorcyle{
  constructor(name, wheels) {
    this.name = name,
    this.wheels = wheels;
  };

  wheelie() {
    console.log('Wheee!');
    return 'Wheee!';
  };
  
  drive() {
    super.stop();
  };

  stop() {
    console.log('Stopping');
    return 'Stopping';
  };
};

module.exports = {Car, Motocycle};
