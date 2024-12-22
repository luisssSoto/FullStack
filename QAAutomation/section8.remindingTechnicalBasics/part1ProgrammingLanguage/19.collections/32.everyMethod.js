"use strict";
//find method NO in-situ

const a1 = ["a", 3, 'b', 2, "c"];
let allTrue = a1.every((character) => {
    return typeof character === 'string';
});

console.log(allTrue);

const a2 = ["a", "b", "c"];
allTrue = a2.every((letter) => {
    return typeof letter === "string";
});
console.log(allTrue);