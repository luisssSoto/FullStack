import { When, Then } from "@wdio/cucumber-framework";
import AllureReporter from "@wdio/allure-reporter";
import DynamicControlsPage from "../../page-objects/theInternetPages/DynamicControlsPage.js";
import { assert } from "chai";

const randomString = crypto.randomUUID();

When(/^I am on the Dynamic Controls page$/, async() => {
    AllureReporter.addStep("Checking if the page was opened")
    assert.isTrue(await DynamicControlsPage.isPageOpened(),`Page is not opened`);
});
When(/^I click on '(.*)' button/, async(textButton) => {
    AllureReporter.addStep(`Click on ${textButton}`);
    await DynamicControlsPage.clickOnButtonInput();
});
AllureReporter.addStep("Check if the Input fiel is enabled");
Then(/^Input field should be '(.*)'/, async(isEnabled) => {
    if(await isEnabled === 'disabled'){
        isEnabled = true;
    }
    else{
        isEnabled = false;
    };
    AllureReporter.addStep('Checking if input field is enabled');
    assert.isTrue(await DynamicControlsPage.isInputFieldEnabled(isEnabled), "Input Field is not enabled");
});
Then(/^'(.*)' message should be displayed/, async(successfulMessage) => {
    AllureReporter.addStep('Checking if successfull message is displayed');
    assert.strictEqual(await DynamicControlsPage.retrieveSuccessfulMsg(), successfulMessage, "Both texts don't match");
});
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