"use strict";
//serialization

let data = {
    name: 'John',
    age: 25,
    city: 'New York'
};

let jsonData = JSON.stringify(data);

console.log(jsonData);
console.log(typeof jsonData);