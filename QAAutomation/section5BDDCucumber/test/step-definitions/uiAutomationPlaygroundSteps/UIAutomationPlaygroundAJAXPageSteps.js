import { When, Then } from "@wdio/cucumber-framework";
import UIAutomationPlaygroundAJAXPage from "../../page-objects/UITestAutomationPlaygroundPages/UIAutomationPlaygroundAJAXPage.js";
import AllureReporter from "@wdio/allure-reporter";
import { assert } from "chai";
import Logger from "../../../framework/utils/Logger.js";

AllureReporter.addStep("Check if the page is being open");
Then('The web page AJAX Data should be open', async() => {
    assert.isTrue(await UIAutomationPlaygroundAJAXPage.isPageOpened(), "The web page was not open");
});
AllureReporter.addStep("Click on the AJAX button");
When('The user clicks on Button Triggering AJAX Request', async() => {
    await UIAutomationPlaygroundAJAXPage.clickOnAjaxButton();
});
AllureReporter.addStep("Check if a text is being displayed");
Then('A label should appear', async() => {
    Logger.info(`TEXT: ${await UIAutomationPlaygroundAJAXPage.isSuccessLabelDisplayed()}`);
    assert.isTrue(await UIAutomationPlaygroundAJAXPage.isSuccessLabelDisplayed(), "The Success Label was not displayed");
});
AllureReporter.addStep("Check if the texts are equal"); 
Then('The text of the label should be: {string}', async(text) => {
    assert.strictEqual(await UIAutomationPlaygroundAJAXPage.getTextSuccessLabel(), text, "The texts are not equal");
});