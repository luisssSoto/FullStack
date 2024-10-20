import Browser from "../../framework/browser/Browser.js";
import { mainConfig } from "../../framework/configs/main.wdio.conf.js";
import MainDynamicControlsPage from "../pageObjects/DynamicControlsPage/MainDynamicControlsPage.js";
import SecondDynamicControlsPage from "../pageObjects/DynamicControlsPage/SecondDynamicControlsPage.js";
import { assert } from "chai";
const randomString = crypto.randomUUID();

describe("Test Dynamic Controls", () => {
    it("The input field should persistance the data", async() => {
        await Browser.openUrl(mainConfig.baseUrl);

        await MainDynamicControlsPage.clickLinkDynamic();
        assert.isTrue(await SecondDynamicControlsPage.isPageOpened());

        await SecondDynamicControlsPage.clickOnButtonInput();
        assert.isTrue(await SecondDynamicControlsPage.isInputFieldEnabled());

        await SecondDynamicControlsPage.clickOnInputField();
        await SecondDynamicControlsPage.settingInputField(randomString);
        assert.strictEqual(await SecondDynamicControlsPage.retrievingValue(), randomString, "The text is not Equal");
    });
});