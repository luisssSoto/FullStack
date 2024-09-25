
function fizzBuzz(array){
    for(let index = 1; index < 101; index++){
        if (index % 3 == 0 && index % 5 == 0) {
            array.push("FizzBuzz")
        }
        else if (index % 3 == 0){
            array.push("Fizz");
        }
        else if (index % 5 == 0) {
            array.push("Buzz");
        }
        else { 
            array.push(index);
        };
    };
    return array;
};

var kidsList = [];
console.log(fizzBuzz(kidsList));