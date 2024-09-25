"use strict";
function fibonacciGenerator(n) {
    var fibonacciArray = [];
    for (var i = 0; i < n; i++){
        if (i == 0){
            fibonacciArray.push(i);
        }
        else if (i == 1){
            fibonacciArray.push(i)
        }
        else{
            var num1 = fibonacciArray[i-2];
            var num2 = fibonacciArray[i-1];
            var sum = num1 + num2;
            fibonacciArray.push(sum);
        };
    };
    return fibonacciArray;
};

console.log(fibonacciGenerator(5))