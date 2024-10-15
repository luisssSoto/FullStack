"use strict";

//first part Google Chrome
//Choose any element -> Right click -> inspect ->console type $0 -> modify the webpage with any attribute (.innerText="anything") 

//second part Google Chrome
//console -> type debugger -> and then the function you want to debugg;

//Challenge Calculator High Order Functions
function add(num1, num2){
    return num1 + num2;
};
function substract(num1, num2){
    return num1 - num2;
};
function multiply(num1, num2){
    return num1 * num2;
};
function divide(num1, num2){
    return num1 / num2;
};

function calculator(num1, num2, operation){
    return operation(num1, num2);
};
