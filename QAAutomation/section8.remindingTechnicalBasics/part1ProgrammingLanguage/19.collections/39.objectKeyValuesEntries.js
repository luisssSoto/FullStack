"use strict";
//Object key values and entries

let user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(Object.getOwnPropertyDescriptors(user));
console.log(Object.getOwnPropertySymbols(user));