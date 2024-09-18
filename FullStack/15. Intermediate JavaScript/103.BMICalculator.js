"use strict";
function bmiCalculator (weight, height) {
    var result = weight / Math.pow(height, 2);
    var interpretation = "Your BMI is " + result + ", so you ";
    if (result < 18.5) {
        interpretation += 'are underweight.';
    }
    else if (result >= 18.5 && result < 24.9) {
        interpretation += 'have a normal weight.';
    }
    else {
        interpretation += 'are overweight.';
    }
    return interpretation;
}

console.log(bmiCalculator(81, 1.81));