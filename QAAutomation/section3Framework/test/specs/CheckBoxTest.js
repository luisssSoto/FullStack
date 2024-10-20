import Browser from "../../framework/browser/Browser.js";
import { mainConfig, data } from "../../framework/configs/main.wdio.conf.js";
import CheckBoxPage from "../pageObjects/DemoQA/CheckBoxPage.js";
import ElementsPage from "../pageObjects/DemoQA/ElementsPage.js";
import MainDemoQAPage from "../pageObjects/DemoQA/MainDemoQAPage.js";
import Logger from "../../framework/utils/Logger.js";
import { assert } from "chai";

describe("Testing Checkbox Page", () => {
    it("It should appears some text after setting checkbox", async() => {
        //1. Open the URL
        await Browser.openUrl(mainConfig.baseUrl);
        assert.isTrue(await MainDemoQAPage.isPageOpened());

        //2. Check if Elements Page is Opened
        await MainDemoQAPage.clickOnElementsButton();
        assert.isTrue(await ElementsPage.isPageOpened());

        //3. Check if Check Box Page is Opened
        await CheckBoxPage.clickOnCheckBoxButton();
        assert.isTrue(await CheckBoxPage.isPageOpened());

        //4. Select Desktop option and check the text
        await CheckBoxPage.clickOnHomeButton();
        assert.isTrue(await CheckBoxPage.checkingCheckBox());

        //5.Compare if the text appears includes the values
        Logger.info(`FINAL RESULT: ${typeof Object.values(data.checkBoxPage)}`);
        console.log("FINAL RESULT console: ", await CheckBoxPage.retrieveTextSuccessArray(Object.values(data.checkBoxPage)));
        assert.isTrue(await CheckBoxPage.retrieveTextSuccessArray(Object.values(data.checkBoxPage)));
    });
});
