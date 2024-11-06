import { When, Then } from "@wdio/cucumber-framework";
import UIAutomationPlaygroundClassPage from "../../page-objects/UITestAutomationPlaygroundPages/UIAutomationPlaygroundClassPage.js";
import AllureReporter from "@wdio/allure-reporter";
import { assert } from "chai";

AllureReporter.addStep("Check if the Class page is openning");
Then('Class Attribute page should be opened', async() => {
    assert.isTrue(await UIAutomationPlaygroundClassPage.isPageOpened(), "The Class web page is not open");
});
AllureReporter.addStep("Click on blue button");
When('The user clicks on blue button', async() => {
    await UIAutomationPlaygroundClassPage.clickOnBlueButton();
});
AllureReporter.addStep("Check if the Alert was displayed");
Then('An Alert should be displayed', async() => {
    assert.isTrue(await UIAutomationPlaygroundClassPage.isAlertOpened(), "The alert is not open");
});
AllureReporter.addStep("Accept the Alert");
When('The user accepts the alert', async() => {
    await UIAutomationPlaygroundClassPage.acceptJSAlert();
});
AllureReporter.addStep("Check if the Alert is not open")
Then('The Alert should be dissapear', async() => {
    assert.isTrue(await UIAutomationPlaygroundClassPage.isAlertClosed(), "The alert is still opened");
});
AllureReporter.addStep("Check locator");
Then('The locator should contain {string}', async(msg) => {
    assert.include(await UIAutomationPlaygroundClassPage.retrieveLocator(), msg, "The main string doesn't contain the second one");
});
