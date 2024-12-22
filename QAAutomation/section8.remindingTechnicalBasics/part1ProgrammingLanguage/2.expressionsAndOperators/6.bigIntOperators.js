"use strict";

//BigInt Operators
let a = 3n + 2n;
console.log(a);

//it is not precise like number
console.log(1n / 2n);

//you can't mix numbers and bigint
try {
    console.log(2n + 2);
} catch (error) {
    console.log(error);
    console.log(error.name);
};

//but you can compare them
console.log(2n === 2);