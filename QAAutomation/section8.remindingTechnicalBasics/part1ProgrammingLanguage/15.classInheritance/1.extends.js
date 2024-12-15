"use strict";
//Class Inheritance

class Animal {
    #specie;

    constructor(specie) {
        this.#specie = specie;
    };

    showSpecie() {
        console.log(`Specie: ${this.#specie}`);
    };
};

class Mammal extends Animal {
    #isMammal = true;

    constructor(specie) {
        super(specie);
    };

    get() {
        return this.#isMammal;
    };
};

const elephant = new Mammal('Elephant');
console.log(elephant.get());
elephant.showSpecie();


