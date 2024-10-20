import { Given, When, Then } from "@wdio/cucumber-framework";
import Browser from "../../framework/browser/Browser.js";
import MainPage from "../page-objects/MainPage.js";
import FileDownloadedPage from "../page-objects/FileDownloadedPage.js";
import { downloadDir, mainConfig} from "../../framework/configs/main.wdio.conf.js";
import * as path from 'path';
import AllureReporter from "@wdio/allure-reporter";
import { assert } from "chai";

AllureReporter.addStep(`Browser opening the webpage: ${mainConfig.baseUrl}`)
Given(/^I am on the Main page$/, async() => {
    await Browser.openUrl(mainConfig.baseUrl);
});
AllureReporter.addStep("Click on \"File Download\" link");
When(/^I select '(.*)' page$/, async (page) => {
    await MainPage.clickNavigationLink(page);
});
AllureReporter.addStep(`Check if the file is displayed`);
When(/^I download (.*) file$/, async (fileName) => {
    assert.isTrue(
        await FileDownloadedPage.isFileLabelDisplayed(fileName),
        `File with name ${fileName} does not exist on the page`
    );
    AllureReporter.addStep("Click on the file to start download it");
    await FileDownloadedPage.downloadFile(fileName);
});
AllureReporter.addStep("Check if the file is downloaded locally");
Then(/^I should see (.*) file in downloads folder$/, async(fileName) => {
    const downloadedFilePath = path.join(downloadDir, fileName);
    assert.isTrue(await Browser.File.isFileExist(downloadedFilePath, 40000), 'File does not downloaded');
});