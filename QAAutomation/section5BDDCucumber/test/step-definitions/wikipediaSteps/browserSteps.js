import ThirdWikipediaPage from "../../page-objects/wikipediaPages/ThirdWikipediaPage.js";
import { When, Then } from "@wdio/cucumber-framework";
import { downloadDir } from "../../../framework/configs/main.wdio.conf.js";
import * as path from 'path';
import AllureReporter from "@wdio/allure-reporter";
import Browser from "../../../framework/browser/Browser.js";
import { assert } from "chai";

AllureReporter.addStep("Check if the file is downloaded locally");
When('I click on Download button', async() => {
    await ThirdWikipediaPage.clickOnDownloadButton();
});
AllureReporter.addStep("Check if the file is downloaded");
Then(/^A file with '(.*)' name as PDF is downloaded/, async(fileName) =>{
    const downloadFilePath = path.join(downloadDir, fileName);
    assert.isTrue(await Browser.File.isFileExist(downloadFilePath, 60000), "The File wasn't downloaded");
});


