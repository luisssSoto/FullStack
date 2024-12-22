"use strict";
//filter method

const a1 = ["a", 1, 'b', 2, "c"];
let onlyNum = a1.filter((character) => {
    return typeof character === "number";
    
});
console.log(onlyNum);
console.log(a1);