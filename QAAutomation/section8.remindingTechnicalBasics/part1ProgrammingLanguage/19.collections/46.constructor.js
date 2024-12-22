"use strict";
//Constructor

let a = new Array();
console.log(typeof a);

//Static properties
console.log(Array[Symbol.species]);

//Static methods
// Array.from()
// Creates a new Array instance from an iterable or array-like object.

// Array.fromAsync()
// Creates a new Array instance from an async iterable, iterable, or array-like object.

// Array.isArray()
// Returns true if the argument is an array, or false otherwise.

// Array.of()
// Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

//Instance properties
// Array.prototype.constructor
// The constructor function that created the instance object. For Array instances, the initial value is the Array constructor.