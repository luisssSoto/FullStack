import { Then } from "@wdio/cucumber-framework";
import UIAutomationPlaygroundDynamicPage from "../../page-objects/UITestAutomationPlaygroundPages/UIAutomationPlaygroundDynamicPage.js";
import AllureReporter from "@wdio/allure-reporter";
import { assert } from "chai";
import Logger from "../../../framework/utils/Logger.js";

AllureReporter.addStep("Dynamic Id page is openning");
Then('Dynamic ID web page should be opened', async() => {
    assert.isTrue(await UIAutomationPlaygroundDynamicPage.isPageOpened(), "The Dynamic we page was not displayed");
});
AllureReporter.addStep('Check if the button is displayed');
Then('A button dynamic id should be displayed', async() => {
    assert.isTrue(await UIAutomationPlaygroundDynamicPage.isDynamicButtonDisplayed(), "The Dynamic id button was not displayed");
});
AllureReporter.addStep("The id should be a string");
Then('Button\'s id should be a string type', async() => {
    Logger.info(`id button: ${await UIAutomationPlaygroundDynamicPage.getIdButton()}`);
    Logger.info(`type of id button: ${typeof await UIAutomationPlaygroundDynamicPage.getIdButton()}`);
    assert.isString(typeof await UIAutomationPlaygroundDynamicPage.getIdButton(), "The id is not a string");
});
