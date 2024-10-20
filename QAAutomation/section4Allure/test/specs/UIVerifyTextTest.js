import Browser from "../../framework/browser/Browser.js";
import { mainConfig, data } from "../../framework/configs/main.wdio.conf.js";
import UIMainPage from "../pageObjects/UIMainPage.js";
import UIVerifyTextPage from "../pageObjects/UIVerifyText/UIVerifyTextPage.js";
import AllureReporter from "@wdio/allure-reporter";
import * as allure from "allure-js-commons";
import { addAttachment } from "@wdio/allure-reporter";
import * as fs from "fs";
import { assert } from "chai"; 

describe("Testing for Survey 4", () => {
    it("The text should be equal", async() => {
        AllureReporter.addParentSuite("Tests for Survey 4");
        AllureReporter.addSuite("Test for UI Playground Test");
        AllureReporter.addSubSuite("Test for verification1"); 
        AllureReporter.addStep("1");
        await Browser.openUrl(mainConfig.baseUrl);
        assert.isTrue(await UIMainPage.isPageOpened());
        
        AllureReporter.addSubSuite("Test for verification2"); 
        AllureReporter.addStep("2", {
            content: "this test only check if the page is opened", 
            name: "skipped test",
            type: "Skip"},
            allure.Status.SKIPPED);
        await UIMainPage.clickOnLink(data.uIVerifyText.verifyTextPage);
        assert.isTrue(await UIVerifyTextPage.isPageOpened());
        
        AllureReporter.addStep("3");
        addAttachment("Screenshot", fs.readFileSync("./test/specs/descarga.png"), "image/png");
        assert.strictEqual(await UIVerifyTextPage.retrieveWelcomeText(), data.uIVerifyText.expectedText, "The strings are not equal");

    });
});
