"use strict";
//Converting Set from Array

const myArray = new Array();
for(let i = 0; i < 5; i++) {
    myArray.push(i);
};
console.log(myArray);
myArray.push(0);
myArray.push(1);
console.log(myArray);

const mySet = new Set(myArray);
console.log(mySet);
mySet.add(5);
console.log(mySet);

//Note when you convert an array into a set all duplicated values
//will dissapear

