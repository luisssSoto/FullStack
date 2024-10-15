import Browser from "../../framework/browser/Browser.js";
import UITestAutomationPlayground from "../pageObjects/UIDynamicTable/UITestAutomationPlayground.js";
import DynamicTablePage from "../pageObjects/UIDynamicTable/DynamicTablePage.js";
import { mainConfig, data } from "../../framework/configs/main.wdio.conf.js";
import AllureReporter from "@wdio/allure-reporter";
import * as allure from "allure-js-commons";
import { assert } from "chai";

describe("Testing Dynamic Tables", () => {
    it("Compare the cell table data is equal to the label", async() => {
        AllureReporter.addStep("Opening the main page", {
            content: "This is first step",
            name: "First Step.txt",
            type: "belongs to Epic"},
            allure.Status.UNKNOWN,
        );
        AllureReporter.addEpic("Web interface");
        await Browser.openUrl(mainConfig.baseUrl);
        assert.isTrue(await UITestAutomationPlayground.isPageOpened());

        AllureReporter.addFeature("Essential features");
        await UITestAutomationPlayground.clickOnDynamicTableLink();
        assert.isTrue(await DynamicTablePage.isPageOpened());

        AllureReporter.addStory("Retrieving Data");
        assert.strictEqual(await DynamicTablePage.getPercentageValue(), await DynamicTablePage.retrieveYellowLabelText(), "The values are not equal");
    });
});
