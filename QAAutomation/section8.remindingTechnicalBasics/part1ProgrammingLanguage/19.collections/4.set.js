"use strict";
//Sets

const mySet = new Set();

//adding
mySet.add(1);
mySet.add('JS');
mySet.add(475n);
mySet.add(undefined);

//showing
console.log(mySet);

//has
console.log(mySet.has('JS'));
console.log(mySet.has(2));

//delete
mySet.delete(1);

//size
console.log(mySet.size);

//showing again
console.log(mySet);

//iterate in it
for(const item of mySet) {
    console.log(item);
};