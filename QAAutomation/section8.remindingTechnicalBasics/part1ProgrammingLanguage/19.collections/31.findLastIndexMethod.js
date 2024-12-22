"use strict";
//find method NO in-situ

const a1 = ["a", 3, 'b', 2, "c"];
let findLastIndex = a1.findLastIndex((concidence) => {
    return typeof concidence === "number";
});
console.log(findLastIndex);
console.log(a1);