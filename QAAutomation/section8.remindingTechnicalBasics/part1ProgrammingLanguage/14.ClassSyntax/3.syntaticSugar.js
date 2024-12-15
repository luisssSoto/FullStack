"use strict";
//Syntatic Sugar

class Developer {
    constructor(name) {
        this.name = name;
    };

    programming() {
        console.log(this.name + ' has started programming...');
    };
};

//1. you need new
try {
    let developer1 = Developer('Justin');
} catch(error) {
    console.log(`Errorname: ${error.name}`);
};

//2. Methods are not-enumberable
let developer1 = new Developer('Justin');

for( let key in developer1) {
    console.log(key);
    console.log(developer1[key])
};

//3. classess use "use strict";