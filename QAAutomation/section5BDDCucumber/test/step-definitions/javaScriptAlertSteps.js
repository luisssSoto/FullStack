import { Given, Then, When } from "@wdio/cucumber-framework";
import Browser from "../../framework/browser/Browser.js";
import MainPage from "../page-objects/MainPage.js";
import JavaScriptAlertsPage from "../page-objects/JavaScriptAlertsPage.js";
import { mainConfig } from "../../framework/configs/main.wdio.conf.js";
import AllureReporter from "@wdio/allure-reporter";
import { assert } from 'chai';

Given(/^I am on the main page$/, async() => {
    AllureReporter.addStep(`Browser opening in ${mainConfig.baseUrl}`);
    await Browser.openUrl(mainConfig.baseUrl);
});
When(/^I click '(.*)' page$/, async (page) => {
    AllureReporter.addStep("Openning the main page");
    await MainPage.clickNavigationLink(page);
});
When(/^I Am on the '(.*)' page$/, async(page) => {
    AllureReporter.addStep("Checking if the page was opened")
    assert.isTrue(
        await JavaScriptAlertsPage.isPageOpened(),
        `Page with the name ${page} is not opened`
    );
});
When('I open a js alert', async() => {
    AllureReporter.addStep("Click on Alert Button");
    await JavaScriptAlertsPage.clickForJSAlertButton();
});
When('I accept the js alert', async() => {
    AllureReporter.addStep("Accept the Alert");
    await JavaScriptAlertsPage.acceptJSAlert();
});
Then(/^I should see a success message '(.*)'$/, async(message) => {
    AllureReporter.addStep("Check the strings are equal");
    assert.strictEqual(await JavaScriptAlertsPage.getResultText(), message, 'Wrong result of interaction with JSAlert');
});