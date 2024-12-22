"use strict";
//Transforming Objects

let prices = {
    banana: 4,
    apple: 2,
    watermelon: 5
};

let doublePrices = Object.fromEntries(
    Object.entries(prices).map((entry) => {
        return [entry[0], entry[1] * 2];
    })
);

console.log(doublePrices.watermelon);