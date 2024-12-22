"use strict";
//Arrow functions

//traditional functions
let sum = function(a, b) {
    return a + b;
};

//arrow functions two arguments 
let sumArrow = (a, b) => a + b;

console.log(sumArrow(4, 5));

//arrow functions one argument
let arrowOneArgument = n => n ** 2;
console.log(arrowOneArgument(4)) 

//arrow functions without any argument
let arrowWithoutArgument = () => 2 + 2;
console.log(arrowWithoutArgument());

//dynamcally 
let gender = 'woman';

let typeOfGender = (gender === 'male') ?
    () => console.log('Man likes life') :
    () => console.log('Man loves Woman');

typeOfGender();