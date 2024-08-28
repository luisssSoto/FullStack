//Functions return
function calcBottles(budget, priceOfMilk){
    return Math.floor(budget / priceOfMilk)
};

function calcChange(budget, priceOfMilk){
    return budget % priceOfMilk
};

function getMilk(budget, priceOfMilk){
    let bottles = calcBottles(budget, priceOfMilk);
    let change = calcChange(budget, priceOfMilk);
    return (`The number of bottles you can get is ${bottles}, and your change will be ${change}`);
}
;
console.log(calcBottles(10,1.5));
console.log(calcChange(10,1.5));
console.log(getMilk(10, 1.5));
