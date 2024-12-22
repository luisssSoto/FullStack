"use strict";
//find method NO in-situ

const a1 = ["a", 3, 'b', 2, "c"];
let findFirstIndex = a1.findIndex((concidence) => {
    return typeof concidence === "number";
});
console.log(findFirstIndex);
console.log(a1);