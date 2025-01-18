"use strict";
import Browser from "../../framework/browser/Browser.js";
import { mainConfig } from "../../framework/configs/main.wdio.conf.js";
import { assert } from 'chai';
import UIHomePage from "../pageObject/UIHomePage.js";
import UITextBoxPage from "../pageObject/UITextBoxPage.js";
import path from 'node:path';
import fs from 'fs';

describe('Testing to fill a form and send it', function () {
    let array;
    let jsonPath = path.resolve('./framework/configs/textBoxData.json');
    console.log(`path: ${jsonPath}`);
    let rawData = fs.readFileSync(jsonPath);
    let jsonObj = JSON.parse(rawData);
    array = Object.values(jsonObj);
    console.log(`Array: ${array}`);

    before('before section', async function() {
        await Browser.openUrl(mainConfig.baseUrl);
        await UIHomePage.clickOnLink();
    });
    beforeEach(async () => {
        await UITextBoxPage.clickOnTextBoxButton();
    });
    for (const { fullName, email } of array) {
            it('should fill the fields and submit them', async function () {
            await UITextBoxPage.setUserNameField(fullName);
            await UITextBoxPage.setEmailField(email);
            await UITextBoxPage.clickOnSubmitButton();
    
            assert.include(await UITextBoxPage.getName(), fullName, 'The names don\'t match each other');
            console.log(`fullName: ${fullName}`);
            assert.include(await UITextBoxPage.getEmail(), email, "The emails don't match each other");
            console.log(`email: ${email}`);
            await Browser.Window.refresh();
        });
    };
});


// array.forEach(({ fullName, email }) => {
//     it(`should fill the fields and send the form for ${fullName}`, async function() {

//         await UITextBoxPage.setUserNameField(fullName);
//         await UITextBoxPage.setEmailField(email);
//         await UITextBoxPage.clickOnSubmitButton();

//         assert.include(await UITextBoxPage.getName(), fullName, 'The names don\'t match');
//         console.log(`USER NAME: ${fullName}`);
//         assert.include(await UITextBoxPage.getEmail(), email, 'The emails don\'t match');
//         console.log(`EMAIL: ${email}`);

//         await Browser.Window.refresh();
//     });
// });
