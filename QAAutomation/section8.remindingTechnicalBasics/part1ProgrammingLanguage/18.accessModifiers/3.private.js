"use strict";
//Private

class CoffeMachine {
    #limitWaterAmount = 200;
    #waterAmount = 0;

    #fixWaterAmount(water) {
        if(water < 0) {
            return 0;
        } else if(water > this.#limitWaterAmount) {
            return this.#limitWaterAmount;
        } else {
            return water;
        }
    };
    setWaterAmount(water) {
        this.#waterAmount = this.#fixWaterAmount(water);
    };
    get waterAmount() {
        return this.#waterAmount;
    }
};

let coffeMachine1 = new CoffeMachine();
coffeMachine1.setWaterAmount(201);
console.log(coffeMachine1.waterAmount);

coffeMachine1.setWaterAmount(-3);
console.log(coffeMachine1.waterAmount);

coffeMachine1.setWaterAmount(199);
console.log(coffeMachine1.waterAmount);

//You can't access the # private property an d methods
//neither in subclasses
