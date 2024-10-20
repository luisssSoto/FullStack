import Browser from "../../framework/browser/Browser.js";
import CheckBoxPage from "../pageObjects/CheckBoxPage.js";
import Logger from "../../framework/utils/Logger.js";
import { assert } from "chai";

describe("Testing Check Box", () => {
    it("It should select the check box", async() => {
        Browser.openUrl("https://demoqa.com/checkbox");
        CheckBoxPage.clickOnCheckBox();
        const information = await CheckBoxPage.checkingCheckBox();
        Logger.info(`INFORMATION: ${information}`);
    });
});