"use strict";
//Return from Constructors

//1. return and object -> return object
function MexicanFood() {
    this.name = 'Pozole';

    return {name: 'Tacos'};
};

let mexicanFood = new MexicanFood();
console.log(mexicanFood.name);

//2. return and empty or return and primitive/empty -> return this
function ItalianFood() {
    this.name = 'Pasta';

    return '';
};

let italianFood = new ItalianFood();
console.log(italianFood.name);