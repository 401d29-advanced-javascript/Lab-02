'use strict';

class Car {

  constructor(name) {
    this.name = name,
    this.wheels = wheels;
  }//

  drive() {
    console.log('Moving Forward');
  }//

  stop() {
    console.log('Stopping');
  }//
  
}
// class Motorcycle extends Car
class Motorcyle extends Vehicle {
      
  wheelie() {
    console.log('Wheee!');
  }//
  
  drive() {
    super.stop();
  }//

}//

module.exports = Car;
