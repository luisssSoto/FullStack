"use strict";
//Array.prototype.reduce()

let arr1 = [1, 2, 3, 4];
let arr2 = arr1.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
}, 10);
console.log(arr2);