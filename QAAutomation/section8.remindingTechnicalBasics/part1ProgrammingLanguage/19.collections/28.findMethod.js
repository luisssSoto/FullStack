"use strict";
//find method NO in-situ

const a1 = ["a", 3, 'b', 2, "c"];
let firstMatch = a1.find((concidence) => {
    return typeof concidence === "number";
});
console.log(firstMatch);
console.log(a1);