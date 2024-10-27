import Browser from "../../framework/browser/Browser.js";
import MainPage from "../page-objects/MainPage.js";
import { Given, When, Then } from "@wdio/cucumber-framework";
import { mainConfig } from "../../framework/configs/main.wdio.conf.js";
import AllureReporter from "@wdio/allure-reporter";

Given('I am on the main page.', async() => {
    AllureReporter.addStep("I am on the main page");
    await Browser.openUrl(mainConfig.baseUrl);
});
When(/^I click on '(.*)' page/, async(linkText) => {
    AllureReporter.addStep("Clicking on the link");
    await MainPage.clickNavigationLink(linkText);
});
