"use stric";

import {assert } from 'chai';

let arrayCondition = [true, false, false];


describe('Testing survey part2', function() {
    for (const condition of arrayCondition) {
        it('should have a succesfull message', function() {
            assert.isTrue(condition, 'something was wrong')
        });
    };
    // arrayCondition.forEach((condition) => {
    //     it('should have a succesfull message', function() {
    //         assert.isTrue(condition, 'something was wrong')
    //     });
    // });
});

study modes of git --global, ---system, --local