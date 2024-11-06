import { When, Then } from "@wdio/cucumber-framework";
import UIAutomationPlaygroundHiddenPage from "../../page-objects/UITestAutomationPlaygroundPages/UIAutomationPlaygroundHiddenPage.js";
import AllureReporter from "@wdio/allure-reporter";
import { assert } from "chai";
import Logger from "../../../framework/utils/Logger.js";

AllureReporter.addStep("Check if the Hidden Layers page is openning");
Then('Hidden Layers web page should be opened', async() => {
    assert.isTrue(await UIAutomationPlaygroundHiddenPage.isPageOpened());
});
AllureReporter.addStep("Check if the style value is 1");
Then('The z-index attribute value is {string}', async(value) => {
    assert.include(await UIAutomationPlaygroundHiddenPage.getGreenButtonContainerStyle(), value, `The value doesn't contain ${value}`);
});
AllureReporter.addStep("Click on Green Button");
When('The user clicks on z-index green button', async() => {
    await UIAutomationPlaygroundHiddenPage.clickOnGreenButton();
});
AllureReporter.addStep("Check if the style value is 2");
Then('The z-index attribute value change to {string}', async(value) => {
    assert.include(await UIAutomationPlaygroundHiddenPage.getBlueButtonContainerStyle(), value, `The value doesn't contain ${value}`);
});
AllureReporter.addStep("Click on Blue Button");
When('The user clicks on z-index blue button', async() => {
    await UIAutomationPlaygroundHiddenPage.clickOnBlueButton();
});
AllureReporter.addStep("Count if there are only 2 div children");
Then('There are only {int} div children', async(children) => {
    Logger.info(`Current Children: ${await UIAutomationPlaygroundHiddenPage.getAllChildrenContainers()}`);
    Logger.info(`Number of children: ${(await UIAutomationPlaygroundHiddenPage.getAllChildrenContainers()).length}`);
    assert.strictEqual((await UIAutomationPlaygroundHiddenPage.getAllChildrenContainers()).length, children, "The number of childrens are different");
});