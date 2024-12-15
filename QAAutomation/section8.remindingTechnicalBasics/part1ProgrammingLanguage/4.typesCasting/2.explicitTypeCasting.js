"use strict";
//Explicit Type Casting

//Number
console.log(Number("Hello"));
console.log(Number(" "));
console.log(Number(undefined));
console.log(Number(null));
let newDate = new Date();
console.log(Number(newDate));
console.log();

//String and toString
try {
    console.log(undefined.toString());
    console.log(null.toString());
}
catch(error){
    console.log('It was not possible');
};

console.log(String(null));
console.log();

//Boolean
console.log(Boolean(1))
console.log(Boolean("hi"))
console.log(Boolean(" "));