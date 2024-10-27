import { When, Then} from "@wdio/cucumber-framework";
import DynamicControlsPage from "../page-objects/DynamicControlsPage.js";
import AllureReporter from "@wdio/allure-reporter";
import { assert } from "chai";
import Logger from "../../framework/utils/Logger.js";

Then(/^I am on the '(.*)' page/, async(webpage) => {
    AllureReporter.addStep(`Checking if the web page ${webpage} is openning`);
    assert.isTrue(await DynamicControlsPage.isPageOpened());
});
When(/^I click on '(.*)' button/, async(textButton) => {
    AllureReporter.addStep(`Click on ${textButton}`);
    await DynamicControlsPage.clickOnButtonInput();
});
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
    let randomMsg = await DynamicControlsPage.retrieveSuccessfulMsg();
    Logger.info(`Successful Mesage: ${randomMsg} <-> Successful Message: ${successfulMessage}`);
    assert.strictEqual(await DynamicControlsPage.retrieveSuccessfulMsg(), successfulMessage, "Both texts don't match");
});

