"use strict";
//sparse arrays

let arr1 = new Array(5);
arr1.unshift(1);
arr1.push(6);
//In some operations, empty slots behave as if they are filled with undefined.
for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
};
console.log();

//But in others (most notably array iteration methods), empty slots are skipped.
arr1.forEach((number) => {
    console.log(number);
});