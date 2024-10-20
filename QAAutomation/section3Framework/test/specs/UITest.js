import Browser from "../../framework/browser/Browser.js";
import { mainConfig, data } from "../../framework/configs/main.wdio.conf.js";
import MainUIPage from "../pageObjects/UITEST/MainUIPage.js";
import ClientSideDelayPage from "../pageObjects/UITEST/ClientSideDelayPage.js";
import { assert } from "chai";

const baseUrl = "http://uitestingplayground.com/";

describe("Testing UI page", ()=> {
    it("The data text should be displayed", async() => {
        await Browser.openUrl(mainConfig.baseUrl);

        //1. Is the page opened
        assert.isTrue(await MainUIPage.isPageOpened());

        //2. Click on Client Delay Button
        await MainUIPage.clickOnClientDelayButton();
        assert.isTrue(await ClientSideDelayPage.isPageOpened());

        //3.
        await ClientSideDelayPage.clickOnTriggerButton();
        assert.strictEqual(await ClientSideDelayPage.retrieveDataLabel(),data.uiPage.dataUI, "Name doesn't match");
    });
});

