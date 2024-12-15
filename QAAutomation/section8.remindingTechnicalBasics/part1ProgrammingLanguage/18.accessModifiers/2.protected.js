"use strict";
//Protected

class CoffeMachine {
    _waterAmount = 0;

    constructor(power) {
        this._power = power;
    };
    
    set waterAmount(water) {
        if(water < 0) {
           water = 0;
        };
        this._waterAmount = water;
    };

    get waterAmount() {
        return this._waterAmount;
    };

    //read only
    get power() {
        return this._power;
    };
};

let coffeMachine1 = new CoffeMachine(200);

coffeMachine1.waterAmount = -10;
console.log(coffeMachine1.waterAmount);

//You can access but it is a bad practice do this
coffeMachine1._waterAmount = 20;
console.log(coffeMachine1.waterAmount);

//Only can read power
console.log(coffeMachine1.power);

try {
    coffeMachine1.power = 150;
} catch(error) {
    console.log(error.name);
};
console.log();

/*
If we inherit class MegaMachine extends CoffeeMachine, then 
nothing prevents us from accessing this._waterAmount or 
this._power from the methods of the new class. */

class MegaMachine extends CoffeMachine {
    setPower(power) {
        this._power = power;
    };
};

const megaMachine1 = new MegaMachine(150);
console.log(megaMachine1.power);
megaMachine1.setPower(300);
console.log(megaMachine1.power);