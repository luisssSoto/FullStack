import UIHomePage from "../../page-objects/SurveyPages/UIHomePage.js";
import { When, Then } from "@wdio/cucumber-framework";
import AllureReporter from "@wdio/allure-reporter";
import { assert } from "chai";

Then('Home page should be open', async() => {
    AllureReporter.addStep("Check if the page is open");
    assert.isTrue(await UIHomePage.isPageOpened(), "The home page is not open");
});
When('The user click on Sample app', async() => {
    AllureReporter.addStep("Click on the link Sample");
    await UIHomePage.clickOnSampleLink();
});