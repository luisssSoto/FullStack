import Browser from "../../framework/browser/Browser.js";
import { When } from "@wdio/cucumber-framework";
import AllureReporter from "@wdio/allure-reporter";

When('The user goes back to the main page', async() => {
    AllureReporter.addStep("It returns the main page again");
    await Browser.Window.switchToFirstWindow();
});