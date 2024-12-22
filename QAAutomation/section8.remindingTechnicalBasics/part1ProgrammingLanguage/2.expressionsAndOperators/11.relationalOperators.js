"use strict";
//Relational Operators
//in look up the property in the object not the value

let characters = ['!', '#', '?'];
console.log('!' in characters);
console.log(0 in characters);

const myFavDay = new Date(1993, 11, 30);
console.log(myFavDay);
console.log(myFavDay instanceof Date);