"use strict";
//find method NO in-situ

const a1 = ["a", 3, 'b', 2, "c"];
let someOfThem = a1.some((character) => {
    return typeof character === 'string';
});

console.log(someOfThem);
