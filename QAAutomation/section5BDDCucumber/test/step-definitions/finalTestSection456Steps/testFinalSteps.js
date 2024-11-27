"use strict";
import { Then } from "@wdio/cucumber-framework";
import { assert } from "chai";
import AllureReporter from "@wdio/allure-reporter";
import fs from 'fs';

function mySum(num1, num2){
    return num1 + num2;
};

Then('The result will be the sum of both of them {int} and {int} equal to {int}', async(n1, n2, result) => {
    AllureReporter.addStep('Check if the sum of the numbers are right');
    AllureReporter.addAttachment("Screenshot", fs.readFileSync('./test/step-definitions/finalTestSection456Steps/AlexSoto.png'), 'image/png');
    assert.equal(await mySum(n1, n2), result, "The sum is wrong");
});
