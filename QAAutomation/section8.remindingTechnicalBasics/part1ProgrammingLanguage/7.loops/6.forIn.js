"use strict";
//for in iterates over property names

let car = {
    make: 'Ford',
    model: 'Mustang'
};

for (let info in car) {
    console.log(`${info}: ${car[info]}`);
};

/*for in... it's not recommended working around arrays
instead, use traditional for loop*/
let companies = ['a1qa', 'google', 'amazon'];
for (let property in companies) {
    console.log(`${property}: ${companies[property]}`);
};

//Destructuring
for (const key in Object.entries(companies)) {
    console.log(`${key}: ${companies[key]}`);
};