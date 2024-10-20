import {Given, When, Then } from "@wdio/cucumber-framework";
import Browser from "../../framework/browser/Browser.js";
import MainPage from "../page-objects/MainPage.js";
import DataTablesPage from "../page-objects/DataTablesPage.js";
import AllureReporter from "@wdio/allure-reporter";
import { mainConfig } from "../../framework/configs/main.wdio.conf.js";
import { assert } from "chai";

const currencySign = '$';

AllureReporter.addStep(`Browser opening in: ${mainConfig.baseUrl}`);
AllureReporter.addStep(`Opening the main page`);
Given(/^The user is on the Main page$/, async() => {
    await Browser.openUrl(mainConfig.baseUrl);
});
AllureReporter.addStep("Click on navigation Link");
When(/^The user select '(.*)' page$/, async (page) => {
    await MainPage.clickNavigationLink(page);
});
AllureReporter.addStep("Check if the page is opened");
When(/^The user is on the '(.*)' page$/, async(page) => {
    assert.isTrue(
        await DataTablesPage.isPageOpened(),
        `Page with the name ${page} is not opened`
    );
});
AllureReporter.addStep(`Getting data values and sum them`);
Then(/^Sum of Due column values should be (\d+)$/, async(expectedSum) => {
    const dueArray = await (await DataTablesPage.getColumnValues()).map(element => parseFloat(element.replace(currencySign, '')));
    const dueSum = dueArray.reduce((accumulator, currentValue) => accumulator + currentValue);
    
    AllureReporter.addStep("The values are equal");
    assert.strictEqual(dueSum, expectedSum, 'Sum of due column values is not correct');
});