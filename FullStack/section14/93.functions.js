//Functions part 2
"use strict";

function getMilk(priceOfMilk, budget){
    let numBottles = Math.floor(budget / priceOfMilk);
    let change = budget % priceOfMilk;
    console.log(`The number of bottles you can get is: ${numBottles} and your change will be: ${change}`);
};

getMilk(1.5, 5);
