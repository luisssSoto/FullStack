import { When, Then } from "@wdio/cucumber-framework";
import UISampleAppPage from "../../page-objects/SurveyPages/UISampleAppPage.js";
import AllureReporter from "@wdio/allure-reporter";
import { assert } from "chai";

Then('Sample app page should be open', async() => {
    AllureReporter.addStep("Check if the Sample page is open");
    assert.isTrue(await UISampleAppPage.isPageOpened(), "The Sample Page is not open");
});
When('The user fill the name field: {string}', async(userName) => {
    AllureReporter.addStep("Setting the name field");
    await UISampleAppPage.setNameInput(userName);
});
When('The user fill the password field: {string}', async(password) => {
    AllureReporter.addStep("Setting the password field");
    await UISampleAppPage.setPasswordInput(password);
});
When('The user click on Log in button', async() => {
    AllureReporter.addStep('Click on login button');
    await UISampleAppPage.clickOnLoginButton();
});
Then('This message should contain {string}', async(userName) => {
    AllureReporter.addStep('The success text should contain the user name');
    assert.include(await UISampleAppPage.getTextSuccessLabel(), userName, "The Messages are not equal");
});