"use strict";
import Browser from "../../framework/browser/Browser.js";
import { mainConfig } from "../../framework/configs/main.wdio.conf.js";
import { assert } from 'chai';
import UIHomePage from "../pageObject/UIHomePage.js";
import UITextBoxPage from "../pageObject/UITextBoxPage.js";
import path from 'node:path';
import fs from 'fs';

describe('Testing to fill a form and send it', function() {
    let jsonPath = path.resolve('./framework/configs/textBoxData.json');
    let rawData = fs.readFileSync(jsonPath);
    let jsonObj = JSON.parse(rawData);
    let array = Object.values(jsonObj);

    array.forEach(({ fullName, email }) => {
        it(`should fill the fields and send the form for ${fullName}`, async function() {
            await Browser.openUrl(mainConfig.baseUrl);
            await UIHomePage.clickOnLink();
            await UITextBoxPage.clickOnTextBoxButton();

            await UITextBoxPage.setUserNameField(fullName);
            await UITextBoxPage.setEmailField(email);
            await UITextBoxPage.clickOnSubmitButton();

            assert.include(await UITextBoxPage.getName(), fullName, 'The names don\'t match');
            console.log(`USER NAME: ${fullName}`);
            assert.include(await UITextBoxPage.getEmail(), email, 'The emails don\'t match');
            console.log(`EMAIL: ${email}`);
        });
    });
});