"use strict";
//Generator methods
const obj = {
    *generatorFunction() {
        let index = 0;
        while(true) {
            yield index++;
        };
    }
};


let iterator = obj.generatorFunction();
console.log(obj.generatorFunction());

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

//The same but with objects directly
let obj1 = {
    *generatorFunction() {
        let index = 0;
        while(true) {
            yield index++;
        };
    }
};

//directly 
console.log(obj1.generatorFunction().next().value);

//instance it
let instanceObj1 = obj1.generatorFunction();
console.log(instanceObj1.next().value);
console.log(instanceObj1.next().value);