// Example array
const numbers = [1, 2, 3, 4, 5];

// Check if all elements in the array are greater than 0
const allPositive = numbers.every(num => num > 0);

console.log(allPositive); // Output: true

// Check if all elements in the array are less than 5
const allLessThanFive = numbers.every(num => num < 5);

console.log(allLessThanFive); // Output: false

// Check if all elements in the array are even numbers
let allEven = numbers.every((num) => {
    return num % 2 === 0;
});
console.log(allEven);