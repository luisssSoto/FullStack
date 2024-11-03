import Browser from "../../../framework/browser/Browser.js";
import SteamHomePage from "../../page-objects/steamPages/SteamHomePage.js"
import { mainConfig } from "../../../framework/configs/main.wdio.conf.js";
import { Given, When, Then, Before, After } from "@wdio/cucumber-framework";
import AllureReporter from "@wdio/allure-reporter";
import { assert } from "chai";

AllureReporter.addStep("Openning the page");
Given('The user is on the main page.', async() => {
    await Browser.openUrl(mainConfig.baseUrl);
});
AllureReporter.addStep("Checking whether page is open");
Then('Check if the main page is open.', async() => {
    assert.isTrue(await SteamHomePage.isPageOpened(), "The web page is not opened");
});
AllureReporter.addStep("Click on About page")
When('The user goes to the About page.', async() => {
    await SteamHomePage.clickOnAbout();
});
