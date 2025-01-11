"use strict";
import { $, browser } from '@wdio/globals';
import { assert } from 'chai';
import path from 'node:path';
import fs from 'fs';
import { json } from 'node:stream/consumers';

// DDT Example
describe('Test functionality by fulling the fields', function() {
    let jsonPath = path.resolve('./testData2.json');
    let rawData = fs.readFileSync(jsonPath);
    let jsonObj = JSON.parse(rawData);
    let testData = Object.values(jsonObj);
    console.log('testData: ', testData);
    before(function() {
        console.log('before section has started');
        console.log(`Test data: ${testData}`);
    });
    it('should fill the fields according test data', async() => {
        await browser.url('https://demoqa.com/text-box');
        
        let fullNameField = await $('//input[@id="userName"]');
        console.log('USERNAME: ', testData[0].fullName);
        await fullNameField.setValue(testData[0].fullName);
        
        let emailField = await $('//input[@id="userEmail"]');
        await emailField.setValue(testData[0].email);
    });
});