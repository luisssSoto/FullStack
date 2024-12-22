"use strict";
//What a class is...

class Developer {
    constructor(name) {
        this.name = name;
    };
    programming() {
        console.log(this.name + ' has started programming...');
    };
};

//Class is a function 
console.log(typeof Developer);

//More precisely the constructor is a function
console.log(Developer === Developer.prototype.constructor);

//Methods are in prototype
console.log(Developer.prototype.programming);

//Getting all the methods from prototype
console.log(Object.getOwnPropertyDescriptors(Developer.prototype));