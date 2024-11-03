import SteamAboutPage from "../../page-objects/steamPages/SteamAboutPage.js";
import { Then } from "@wdio/cucumber-framework";
import AllureReporter from "@wdio/allure-reporter";
import { assert } from "chai";

AllureReporter.addStep("Check if About Section page is open");
Then('Check if the About page is open.', async() => {
    assert.isTrue(await SteamAboutPage.isPageOpened(), "The web page is not opened");
});
AllureReporter.addStep("Check if the button logo is displayed");
Then('Check if the Steam button is displayed.', async() => {
    assert.isTrue(await SteamAboutPage.isInstallDisplayed(), "The button is not displayed");
});
