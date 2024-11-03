import { Then, When } from "@wdio/cucumber-framework";
import TheInternetMainPage from "../../page-objects/theInternetPages/TheInternetMainPage.js";
import JavaScriptAlertsPage from "../../page-objects/theInternetPages/JavaScriptAlertsPage.js";
import AllureReporter from "@wdio/allure-reporter";
import { assert } from 'chai';

When(/^I click '(.*)' page$/, async (page) => {
    AllureReporter.addStep("Openning the main page");
    await TheInternetMainPage.clickNavigationLink(page);
});
When(/^I am on the JavaScript Alerts page$/, async() => {
    AllureReporter.addStep("Checking if the page was opened")
    assert.isTrue(await JavaScriptAlertsPage.isPageOpened(),`Page is not opened`);
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