"use strict";
//Overriding

class Homero {
    firstName = 'Homero'

    showName() {
        return this.firstName;
    };
};

class Bart extends Homero {
    firstName = 'Bartolomeo'
    
    showName() {
        return this.firstName; 
    };
};

let homero1 = new Homero();
console.log(homero1.showName());

let bart1 = new Bart();
console.log(bart1.showName());