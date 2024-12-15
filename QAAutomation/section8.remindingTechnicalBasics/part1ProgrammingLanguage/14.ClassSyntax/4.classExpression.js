"use strict";
//Class Expression
/*Just like functions, classes can be defined inside another 
  expression, passed around, returned, assigned, etc.*/

let User = class {
    sayHi() {
        console.log('Hi')
    };
};

let user1 = new User();
user1.sayHi();

//2. If a class has a name it is only visible inside of it
let MexicanName = class WomanNames {
    showWomanName() {
        console.log(WomanNames);
    };
};

let maria = new MexicanName();
maria.showWomanName();

try {
    console.log(WomanNames);
} catch(error) {
    console.log(error.message);
};

//3. returning a class
function makingAPet(specie, isDangerous) {
    return class Pet {
        specie = specie;
        isDangerous = isDangerous

        showInformation() {
            console.log(`Specie: ${specie}, isDangerous: ${isDangerous}`);
        };
    };
};

const Pet1 = makingAPet('feline', true);
let lion1 = new Pet1();
lion1.showInformation();
