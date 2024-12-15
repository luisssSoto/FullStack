"use strict";
//Arrays to Objects
//spread operator
let frontEnd = ["HTML", "CSS", "JavaScript"];
let object = {... frontEnd};
console.log(object);
console.log(object[0]);

//for loop
let objectLoop = {};
for(let i = 0; i < frontEnd.length; i++){
    objectLoop[i] = frontEnd[i];
};
console.log(objectLoop);

//for Each
let objectEach = {};
frontEnd.forEach((item, index) => {
    objectEach[index] = item;
});
console.log(objectEach);

//assign 
let objectAssign = Object.assign({}, frontEnd);
console.log(objectAssign);

//Objects to Arrays
let array1 = Object.entries(objectAssign);
console.log(array1);

let array2 = Object.keys(objectAssign);
console.log(array2);

let array3 = Object.values(objectAssign);
console.log(array3);