'use strict';


const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleByClass = require('./vehicle-class.js');
const VehicleByFactory = require('./vehicle-factory.js');

// Implement a car and motorcycle
const mazda = new Vehicle.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new Vehicle.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());



const mazdaByClass = new VehicleByClass.car('Mazda 3', 4);
const motoByClass = new VehicleByClass.motorcycle('Harley', 2);



const mazdabyFactory = new VehicleByFactory.car('Mazda 3', 4);
const motoByFactory = new VehicleByFactory.motorcycle('Harley', 2);
