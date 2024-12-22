"use strict";
//Copying and Mutation methods
/**
 * An easy way to change a mutating method into a non-mutating 
 * alternative is to use the spread syntax or slice() to create 
 * a copy first:
 */
let arr = [0, 1, 2, 3, 4];
arr.copyWithin(0, 1, 2); // mutates arr
console.log(arr);
const arr2 = arr.slice().copyWithin(0, 1, 2); // does not mutate arr
const arr3 = [...arr].copyWithin(0, 1, 2); // does not mutate arr
console.log(arr2);
console.log(arr3);