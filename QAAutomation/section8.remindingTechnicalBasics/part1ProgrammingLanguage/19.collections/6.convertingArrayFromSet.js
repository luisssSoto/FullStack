"use strict";
//Converting Array From Set

const mySet = new Set();
for(let i = 0; i < 5; i++) {
    mySet.add(i);
};

console.log(mySet);

let myArray = new Array();
console.log(myArray);
myArray = Array.from(mySet);
console.log(myArray);
myArray.push(0);
myArray.push(1);
console.log(myArray);
