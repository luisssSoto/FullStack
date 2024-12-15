"use strict";
//Classes and Constructor

export class Person {
    name;
    constructor(name) {
        this.name = name;
    };
    
    introduceYourSelf() {
        console.log(`Hi I'm ${this.name}`);
    };
};

//object or instance of the class Person
const henry = new Person('Henry');
henry.introduceYourSelf();
