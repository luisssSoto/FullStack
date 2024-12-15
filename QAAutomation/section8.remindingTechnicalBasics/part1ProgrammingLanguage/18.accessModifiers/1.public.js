"use strict";
//Public 

class CoffeMachine {
    waterAmount = 0;

    constructor(power) {
        this.power = power;
        console.log(`power: ${this.power}W`);
    };
};

let coffeMachine1 = new CoffeMachine('400');
console.log(coffeMachine1);

//Anybody can access the property
coffeMachine1.waterAmount = 200;
console.log(coffeMachine1.waterAmount);