"use strict";
//Switch
let misteriousAnimal = 'flies';

switch (misteriousAnimal) {
    case 'monkey':
        console.log('Mammal');
        break;
    case 'bee':
    case 'mosquito':
    case 'flies':
        console.log('Insect');
        break;
    case 'snake':
        console.log('Oviparous')
        break;
    default:
        console.log('Unknown');
};

//Note: Type Matters

//practice

function chooseAWeekDay(numberOfDay){
    let weekday = '';
    switch(numberOfDay){
        case 1:
            weekday = 'Monday';
            break;
        case 2:
            weekday = "Tuesday";
            break;
        case 3:
            weekday = "Wednesday";
            break;
        case 4:
            weekday = "Thursday";
            break;
        case 5:
            weekday = "Friday";
            break;
        case 6:
            weekday = "Saturday";
            break;
        case 7:
            weekday = "Sunday";
            break;
        default:
            weekday = "I don't what day of the week is";
    };
    return weekday;
};


console.log(chooseAWeekDay(8));