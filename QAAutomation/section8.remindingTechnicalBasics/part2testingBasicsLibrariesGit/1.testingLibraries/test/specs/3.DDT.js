"use strict";

import {assert} from 'chai';
import fs from 'fs';
import path from 'node:path';

//Data Driven Test (DDT)

const jsonPath = path.resolve('../1.testingLibraries/testData.json');
const rawData = fs.readFileSync(jsonPath);
const data = JSON.parse(rawData);
let array1 = Object.values(data);


//Substraction function
function substraction(operand1, operand2) {
    return operand1 - operand2;
};

describe('Arithmetic Operations', function() {
    describe('Addition function', function() {
        array1.forEach(({operand1, operand2, result}) => {
            it(`addition of ${operand1} + ${operand2} should be ${result}`, () => {
                assert.equal((operand1 + operand2), result, 'The result was not which we expected');
            });
        });
    });
});
describe('Substraction function', function() {
    array1.forEach(({operand1, operand2}) => {
        it(`substraction of ${operand1} - ${operand2} = ${substraction(operand1, operand2)}`, () => {
            assert.equal((operand1 - operand2), substraction(operand1, operand2), 'The substraction is wrong' );
        });
    });
});


