"use strict";
//reduce method
let money = [10, 10, 40];
let total = money.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
}, 10);

console.log(total);