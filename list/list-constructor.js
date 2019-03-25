'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

List.prototype.unshift = function(...item) {
  let origLength = this.length;
  let newLength = this.length + item.length;
  for( i = origLength - 1; i >= 0; i--) {
    this.data[newLength - 1] = this.data[origLength - 1];
  }
  for( i = 0; i < item.length; i++) {
    this.data[i] = item[i];
  }
  return newLength;
};

module.exports = List;
