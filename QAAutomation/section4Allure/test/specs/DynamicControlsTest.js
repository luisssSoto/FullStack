import Browser from "../../framework/browser/Browser.js";
import { mainConfig } from "../../framework/configs/main.wdio.conf.js";
import MainDynamicControlsPage from "../pageObjects/DynamicControlsPage/MainDynamicControlsPage.js";
import SecondDynamicControlsPage from "../pageObjects/DynamicControlsPage/SecondDynamicControlsPage.js";
import { assert } from "chai";
import AllureReporter from "@wdio/allure-reporter";

const randomString = crypto.randomUUID();

describe("Test Dynamic Controls", () => {
    it("The input field should persistance the data", async() => {
        AllureReporter.addStep(`Browser opening the webpage: ${mainConfig.baseUrl}`);
        await Browser.openUrl(mainConfig.baseUrl);

        AllureReporter.addStep("Click on Dynamic Controls link");
        await MainDynamicControlsPage.clickLinkDynamic();
        assert.isTrue(await SecondDynamicControlsPage.isPageOpened());

        AllureReporter.addStep("Click on \"Enabled\" Button");
        await SecondDynamicControlsPage.clickOnButtonInput();
        assert.isTrue(await SecondDynamicControlsPage.isInputFieldEnabled());

        AllureReporter.addStep("Click on Input Field");
        await SecondDynamicControlsPage.clickOnInputField();

        AllureReporter.addStep(`Set the input field to this value: ${randomString}`);
        await SecondDynamicControlsPage.settingInputField(randomString);

        AllureReporter.addStep("Check the strings are equal");
        assert.strictEqual(await SecondDynamicControlsPage.retrievingValue(), randomString, "The text is not Equal");
    });
});