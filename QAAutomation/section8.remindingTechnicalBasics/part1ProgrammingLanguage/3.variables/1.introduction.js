"use strict";
//Variables

//let
let user = "let is local";
console.log(user);
{
    let inside = 'inside';
    console.log(inside);
};
try {
    console.log(inside);
}
catch(error){
    console.log("this is the error " + error);
};

//var oldest
var why = "var is global";

{
    var global = "Global";
    console.log(global);
};

console.log(global);

//const
const HARDCODED_CONSTANT = "Hardcoded constant";
const in_execution = 'John' + 'Doe';

let a = 1;
let b = a++;
console.log(a);
let c = --a;

console.log(b);
console.log(a);
console.log(c);