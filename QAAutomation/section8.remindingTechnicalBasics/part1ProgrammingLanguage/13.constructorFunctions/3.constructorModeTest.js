"use strict";
//Constructor mode test

function Computer(so) {

    if(new.target) {
        console.log(new.target);
    } else {
        console.log(new.target);
        return new Computer(so);
    };
    
    this.so = so;
    this.isWithNew = new.target;
};

let mac1 = Computer('IOS');
console.log();
let lenovo = new Computer('Windows');
console.log(lenovo.so);
console.log(lenovo.isWithNew);
