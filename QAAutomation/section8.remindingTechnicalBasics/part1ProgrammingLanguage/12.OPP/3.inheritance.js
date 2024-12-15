"use strict";
//Inheritance

import { Person } from './1.classesAndConstructor.js';

class Professor extends Person {
    teaches;

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    };

    introduceYourSelf() {
        console.log(`Hi I'm ${this.name} and I will be your ${this.teaches} teacher`);
    };
    grade(paper) {
        const grade = Math.floor(Math.random() * 4 + 1);
        console.log(grade);
    };
};

const fulanito = new Professor('Math');
fulanito.introduceYourSelf();
fulanito.grade('on paper');