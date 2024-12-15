"use strict";
//Class Syntax

class Developer {
    constructor(name) {
        this.name = name;
    };
    programming() {
        console.log(this.name + ' has started programming...');
    };
};

let developer1 = new Developer('MiduDev');
developer1.programming();