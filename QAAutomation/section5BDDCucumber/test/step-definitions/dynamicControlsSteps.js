import { When, Then } from "@wdio/cucumber-framework";
import AllureReporter from "@wdio/allure-reporter";
import DynamicControlsPage from "../page-objects/DynamicControlsPage.js";
import { assert } from "chai";

const randomString = crypto.randomUUID();

When('I click on input field', async() => {
    AllureReporter.addStep("Click on input field");
    await DynamicControlsPage.clickOnInputField();
});
When('I type a random text', async() => {
    AllureReporter.addStep("Type random text on input field");
    await DynamicControlsPage.settingInputField(randomString);
});
Then('The random text should be equal to the text on input field', async() => {
    AllureReporter.addStep("Check if both texts are equal");
    assert.strictEqual(await DynamicControlsPage.retrievingValue(), randomString, "Both texts are not equal");
});