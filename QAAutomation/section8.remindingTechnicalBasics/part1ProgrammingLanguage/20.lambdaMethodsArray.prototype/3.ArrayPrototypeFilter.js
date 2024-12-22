"use strict";
//Array.prototype.filter

//arrow function
let numbers = [2, 8, 10, 3, 5, 7, 1];
console.log(numbers);
let greaterThanFive = numbers.filter((number) => {
    return number > 5;
});
console.log(greaterThanFive);

//function
function onlyNumbers(value) {
    return typeof value === "number";
};

console.log(onlyNumbers([2, "2", 'character', true]));
let arr1 = [2, "2", 'character', true, 8];
let arr2 = arr1.filter(onlyNumbers);
console.log(arr2);
