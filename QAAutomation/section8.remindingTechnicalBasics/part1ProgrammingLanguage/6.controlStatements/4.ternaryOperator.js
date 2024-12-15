"use strict";
//Ternary Operator

const GOD = 'LOVE';
console.log(GOD === 'LOVE' ? 'It is Jesus' : 'It is not Jesus');

//Multiple ?
let element = "JS";

let meaningOfElement = (element === "HTML") ? 'Structure':
    (element === "JS") ? 'Functionality':
    (element === "CSS") ? 'Style':
    'There is another element I don\'t know'

console.log(meaningOfElement);