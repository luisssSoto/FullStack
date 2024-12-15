"use strict";
//Methods in Constructor

function User(name) {
    this.name = name;

    this.sayHi = function() {
        console.log(`Hi my name is: ${this.name}`);
    };
};

let john = new User('John');
john.sayHi();

//It's like the next below code block

let johny = {
    name: 'johny',
    sayHi: function() {
        console.log(`Hi my name is ${this.name}`);
    }
};

johny.sayHi();