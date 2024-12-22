"use strict";
//Creating an Array

//3 different ways
let arr1 = new Array(1, 2, 3);
let arr2 = Array(1, 2, 3);
let arr3 = [1, 2, 3];

//Setting the length
let arr4 = new Array(4);
console.log(arr4.length);
let arr5 = [];
arr5.length = 4;
console.log(arr5.length);

//Arrays as a properties of an obj
const obj = {
    property1: ['property1']
};
obj.property2 = ['property2'];
console.log(obj.property1, obj.property2);

//Array with only one number data type
//one element
let arr6 = [42];
console.log(arr6.length);
//length
let arr7 = new Array(42);
console.log(arr7.length);

//RangeError
try {
    let arr8 = Array(9.3);
} catch(error) {
    console.log(error.name);
};

//Creating array with single one elment
const arr9 = Array.of(9.3);
console.log(arr9);
arr9.push("1");
console.log(arr9)