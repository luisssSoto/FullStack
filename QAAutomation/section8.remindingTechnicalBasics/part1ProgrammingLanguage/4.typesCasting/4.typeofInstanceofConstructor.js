"use strict";
//typeof
console.log(typeof "Hello");
console.log(typeof null);
console.log(typeof adding);

//instanceof
let date = new Date()
console.log(date instanceof Date);

//constructor
let user = {
    firstName: "John",
    lastName: "Doe"
};
console.log(user.constructor);

function adding(n1, n2) {
    return n1 + n2;
};