"use strict";
//Bitwise Operators

//left shift 
let ls = 4 << 1;
//4 = 100 | 1 = 1 
console.log(ls);

//right shift
let rs = 4 >> 1;
console.log(rs);

//zero-fill right shift
let zf = 25 >>> 2; // 1 10
console.log(zf);

//AND &
let and = 5 & 1;
console.log(and);

//XOR
let xor = 3 ^ 1;
console.log(xor);

//OR 
let or = 3 | 1;
console.log(or);

//NOT
let n = ~3;
console.log(n);