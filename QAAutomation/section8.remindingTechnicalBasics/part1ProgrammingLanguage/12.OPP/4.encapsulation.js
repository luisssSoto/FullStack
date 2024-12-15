"use strict";
//Encapsulation

import { Person } from "./1.classesAndConstructor.js";

class Student extends Person {
    #year;

    constructor(name, year) {
        super(name);
        this.#year = year;
    };

    introduceYourSelf() {
        console.log(`Hi I'm ${this.name} and I'm in ${this.#year} year`);
    };
    
    canStudyArchery() {
        return this.#year > 1;
    };
};

const jimmy = new Student('jimmy', 2);
jimmy.introduceYourSelf();
console.log(jimmy.canStudyArchery());

//You can't access a private property and/or method outside the class