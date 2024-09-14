//BMI Calculator
function bmiCalculator(weight, heigth){
    return Math.round(weight, Math.pow(heigth, 2));
};
var bmi = bmiCalculator(65, 1.8);
console.log(bmi);