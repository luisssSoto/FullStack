"use strict";
//beforeEach
import { assert } from 'chai';

let operands = [
    {
        case: [7, 3]
    },
    {
        case: [6, 2]
    },
    {
        case: [2, 100]
    }
]
let results = [
    {
        addition: []
    },
    {
        substraction: [4, 4, -98]
    }
]
let additionResults = [10, 8, 102];

describe('Basics Operations', function() {
    let count = 0;
    this.beforeEach('Before Each function', function() {
        results[0].addition.push(additionResults[count]);
        count ++;
    });
    for (let i = 0; i < operands.length; i++) {
        it('should sum both operands', function() {
            let operand1 = operands[i].case[0];
            let operand2 = operands[i].case[1];
            let result = operand1 + operand2;
            assert.equal(result, results[0].addition[i], 'The result is not equal');
        });
    };
    for (let j = 0; j < operands.length; j++) {
        it.only('should rest both operands', () => {
            assert.equal(operands[j].case[0] - operands[j].case[1], results[1].substraction[j], 'The substractions is wrong');
        });
    };
});

console.log(results[0].addition);