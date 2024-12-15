"use strict";
//Class Fields

class Currency {
    name = 'dollar';
};

let dollar = new Currency();
console.log(dollar.name);

//Class fields aren't in Prototype
console.log(Object.getOwnPropertyDescriptors(Currency.prototype));