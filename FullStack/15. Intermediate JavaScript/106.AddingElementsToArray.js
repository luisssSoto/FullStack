"use strict";

var childrenList = [];
for (let index = 1; index < 101; index++) {
    childrenList.push(index);
}
console.log(childrenList);

for (const child of childrenList) {
    if (child % 3 == 0 && child % 5 == 0) {
        console.log(child + " FizzBuzz");
    }
    else if (child % 3 == 0){
        console.log(child + " Fizz");
    }
    else if (child % 5 == 0) {
        console.log(child + " Buzz");
    };
};

// Challenge
var kidsArray = [];
var index = 0;

function fizzBuzz(){
    index ++;
    if (index % 3 == 0 && index % 5 == 0) {
        kidsArray.push("FizzBuzz")
    }
    else if (index % 3 == 0){
        kidsArray.push("Fizz");
    }
    else if (index % 5 == 0) {
        kidsArray.push("Buzz");
    }
    else { 
        kidsArray.push(index);
    }
    return kidsArray;
};

console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
