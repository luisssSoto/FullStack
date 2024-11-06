import { Then } from "@wdio/cucumber-framework";
import UIAutomationPlaygroundLoadPage from "../../page-objects/UITestAutomationPlaygroundPages/UIAutomationPlaygroundLoadPage.js";
import AllureReporter from "@wdio/allure-reporter";
import { assert } from "chai";

AllureReporter.addStep("Wait until the web page is open")
Then('Load Delays should be opened after unpredictable time', async() => {
    assert.isTrue(await UIAutomationPlaygroundLoadPage.isPageOpened(), "The page was not opened on time");
});

AllureReporter.addStep("Check if the button is appearing also");
Then('The blue button should be displayed', async() => {
    assert.isTrue(await UIAutomationPlaygroundLoadPage.isAppearingBlueButton(), "The Appearing Blue Button is not displayed");
});