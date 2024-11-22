import { When, Then } from "@wdio/cucumber-framework";
import QAAutomationHomePage from "../../page-objects/QAAutomationPages/QAAutomationHomePage.js";
import AllureReporter from "@wdio/allure-reporter";
import { assert } from "chai";

Then('QA Automation Home page is displayed', async() => {
    AllureReporter.addStep('Check if the home page is displayed');
    assert.isTrue(await QAAutomationHomePage.isPageOpened(), 'The Home page was not displayed');
});
When('The user clicks on Alerts, Frame & Windows link', async() => {
    AllureReporter.addStep('Click on Alerts, Frame & Windows link');
    await QAAutomationHomePage.clickOnAlertsButton();
});
When('The user clicks on Forms link', async() => {
    AllureReporter.addStep('Click on Forms Link');
    await QAAutomationHomePage.clickOnFormsButton();
});