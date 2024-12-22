"use strict";
//Array.prototype.find 

let arr15 = [10, 4, 6, 8, 12, 15, 20];
let found = arr15.find((element) => {
    return element > 10;
});
console.log(found);