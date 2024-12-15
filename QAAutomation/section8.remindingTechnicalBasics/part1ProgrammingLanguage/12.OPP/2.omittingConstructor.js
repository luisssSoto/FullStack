"use strict";
//Omitting Constructor

class Animal {
    sleep() {
        console.log('zzzz');
    };
};

let armadillo = new Animal();
armadillo.sleep();
//default constructor
console.log(armadillo.constructor);