import Browser from "../../../framework/browser/Browser.js";
import MainWikipediaPage from "../../page-objects/wikipediaPages/MainWikipediaPage.js";
import { mainConfig } from "../../../framework/configs/main.wdio.conf.js";
import { Given, When, Then, Before, After } from "@wdio/cucumber-framework";
import AllureReporter from "@wdio/allure-reporter";
import { assert } from "chai";

// Before(async function() {
//     await Browser.openUrl(mainConfig.baseUrl);
//     assert.isTrue(await MainWikipediaPage.isPageOpened());
// });
// After(async function() {
//     await Browser.openUrl("https://github.com");
// });

AllureReporter.addStep("Main page is openning");
Given('The Main page is displayed', async() => {
    await Browser.openUrl(mainConfig.baseUrl);
    assert.isTrue(await MainWikipediaPage.isPageOpened());
});
AllureReporter.addStep("Input in search field");
When('I input {string} text in the search field', async(keyWord) => {
    await MainWikipediaPage.setInputSearchField(keyWord);
});
AllureReporter.addStep("Click on Submit button");
When('I click on submit button', async() => {
    await MainWikipediaPage.clickOnSubmitButton();
});
AllureReporter.addStep("Setting language dropdown");
When(/I change search language to Español '(.*)'/, async(idiom) => {
    await MainWikipediaPage.setLanguageDropdown(idiom);
});