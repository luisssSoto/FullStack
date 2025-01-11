let a = [
    { operand1: 3, operand2: 4, result: 7 },
    { operand1: 8, operand2: 4, result: 12 },
    { operand1: 3, operand2: 5, result: 8 }
];
console.log(a[0].result);
a[0].result = 20;
console.log(a[0].result);
