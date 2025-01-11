"use strict";

import path from 'node:path';
import fs from 'fs';
import { assert } from 'chai';

describe('Hooks before', function() {
    let jsonPath = path.resolve('./testData.json');
    let rawData = fs.readFileSync(jsonPath);
    let jsonObj = JSON.parse(rawData);
    let array = Object.values(jsonObj);

    before(function() {
        array[0].result = 12;
        array[1].result = 32;
        array[2].result = 15;
    });
    it(`should multiply operands`, () => {
        array.forEach(({operand1, operand2, result}) => {
            console.log(operand1, operand2, result);
            assert.equal(result, operand1 * operand2, 'The multiplication is wrong');
        });
    });
});