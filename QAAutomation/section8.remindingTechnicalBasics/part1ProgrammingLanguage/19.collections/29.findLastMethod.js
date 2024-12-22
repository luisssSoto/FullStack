"use strict";
//lastfind method NO in-situ

const a1 = ["a", 3, 'b', 2, "c"];
let lastMatch = a1.findLast((concidence) => {
    return typeof concidence === "number";
});
console.log(lastMatch);
console.log(a1);