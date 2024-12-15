"use strict";
//Overriding Method

class Saiyan {
    #name;

    constructor(name) {
        this.#name = name;
    };

    get() {
        return `I am Saiyan: ${this.#name}`;
    };
};

class SuperSaiyan extends Saiyan {
    #colorHair = 'blond';

    constructor(name) {
        super(name);
    };

    get() {
        let introduction = super.get();
        return `${introduction} But I'm powerfull, 'cause I have ${this.#colorHair} hair`;
    };

    //arrow functions only works with super inside another function 
    introductionAfterAWhile() {
        setTimeout(() => {
            console.log(super.get());
        }, 2000);
    };
};

let raditz = new Saiyan('Raditz');
console.log(raditz.get());

let vegeta = new SuperSaiyan('Vegeta');
console.log(vegeta.get());

vegeta.introductionAfterAWhile();