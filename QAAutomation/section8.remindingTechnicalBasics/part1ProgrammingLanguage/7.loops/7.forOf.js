"use strict";
/*for off iterates over property values recommended with
with Arrays, Map, Sets No objects*/

let car = {
    make: 'Ford',
    model: 'Mustang'
};

try {
    for (let info of car) {
    console.log(`${info}: ${car[info]}`);
    };
} catch (error) {
    console.log("it's not possible to use for of with objects");
};

let mexicanLastNames = ['González', 'Gómez', 'Reyes'];

for (let value of mexicanLastNames) {
    console.log(value);
};

//Destructuring
for (const [key, value] of Object.entries(mexicanLastNames)) {
    console.log(`${key}: ${value}`);
};