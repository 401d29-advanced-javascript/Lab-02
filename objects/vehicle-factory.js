'use strict';

CarFactory = (name) => {
  let car = Object.assign({}, {name}, {drive}, {stop});
  let drive = () => {
    return 'Moving Forward';
  };
  let stop = () => {
    return 'Stopping';
  };
  return Object.freeze(car);
};

MotorcycleFactory = (name) => {
  let motorcycle = Object.assign({}, {name}, {drive}, {stop}, {wheelie});
  let drive = () => {
    return 'Moving Forward';
  };
  let stop = () => {
    return 'Stopping';
  };
  let wheelie = () => {
    return 'Wheee!';
  };
  return Object.freeze(car);
};

module.exports = {CarFactory, MotorcycleFactory};


