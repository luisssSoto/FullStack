import { When, Then } from "@wdio/cucumber-framework";
import SecondWikipediaPage from "../../page-objects/wikipediaPages/SecondWikipediaPage.js";
import ThirdWikipediaPage from "../../page-objects/wikipediaPages/ThirdWikipediaPage.js";
import AllureReporter from "@wdio/allure-reporter";
import { assert } from "chai";
import Logger from "../../../framework/utils/Logger.js";

Then(/^A second page '(.*)' is displayed/, async(secondPage) => {
    AllureReporter.addStep(`${secondPage} page is openning`);
    assert.isTrue(await SecondWikipediaPage.isPageOpened());
});
AllureReporter.addStep("Click on Tool Button");
When('I click on tool menu button', async() => {
    await SecondWikipediaPage.clickOnInputTools();
});
AllureReporter.addStep("Click on link");
When(/^I click on '(.*)' link./, async(link) => {
    await SecondWikipediaPage.clickOnLinkButton(link);
});
Then(/^Information page for '(.*)' is displayed/, async(thirdName) => {
    AllureReporter.addStep(`${thirdName} page is openning`);
    assert.isTrue(await ThirdWikipediaPage.isPageOpened());
});
AllureReporter.addStep("Check if the title of web page match with the expected one")
Then(/^The title '(.*)' is displayed/, async(title) => {
    assert.strictEqual(await ThirdWikipediaPage.retrieveThirdMainTitle(), title, "The titles are not equal");
});
AllureReporter.addStep("Check if the article page match with the expected one");
Then(/^Article page for'(.*)' is open/, async(title) => {
    assert.strictEqual(await SecondWikipediaPage.retrieveSecondMainTitle(), title, "These titles are not equal");
});
