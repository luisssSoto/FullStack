import Browser from "../../../framework/browser/Browser.js";
import { When, Then } from "@wdio/cucumber-framework";
import AllureReporter from "@wdio/allure-reporter";
import { assert } from "chai";
import QAAutomationAlertsPage from "../../page-objects/QAAutomationPages/QAAutomationAlertsPage.js";

Then('Alerts, Frame & Windows page is displayed', async() => {
    AllureReporter.addStep('Alerts, Frame & Windows page is displayed');
    assert.isTrue(await QAAutomationAlertsPage.isPageOpened(), 'The Alerts page was not displayed');
});
When('The user clicks on Nested Frames', async() => {
    AllureReporter.addStep('Click on Nested Frames');
    await QAAutomationAlertsPage.clickOnNestedFrames();
});
Then('Nested Frames title is displayed', async() => {
    AllureReporter.addStep('Check if title is displayed');
    assert.isTrue(await QAAutomationAlertsPage.isNestedFramesLabelDisplayed(), 'Nested Frames it was not displayed');
});
When('The user switch to Parent Frame', async() => {
    AllureReporter.addStep('Switching to Parent Frame');
    await Browser.IFrame.switchToFrame(await QAAutomationAlertsPage.getParentFrame())
});
Then('The text {string} is in the parent Frame', async(parentFrameText) => {
    AllureReporter.addStep('Check text in parent frame');
    assert.strictEqual(await QAAutomationAlertsPage.getParentFrameText(), parentFrameText, 'Parent Frame Text no match');
});
When('The user switch to Child Frame', async() => {
    AllureReporter.addStep('Check text in child frame');
    await Browser.IFrame.switchToFrame(await QAAutomationAlertsPage.getChildFrame());
});
Then('The text {string} is in the child Frame', async(childFrameText) => {
    AllureReporter.addStep('Check text in child frame');
    assert.strictEqual(await QAAutomationAlertsPage.getChildFrameText(), childFrameText, 'Child Frame Text not match');
});