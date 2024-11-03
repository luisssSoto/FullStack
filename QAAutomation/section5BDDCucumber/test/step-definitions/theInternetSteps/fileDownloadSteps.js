import { When, Then } from "@wdio/cucumber-framework";
import Browser from "../../../framework/browser/Browser.js";
import FileDownloadedPage from "../../page-objects/theInternetPages/FileDownloadedPage.js";
import { downloadDir } from "../../../framework/configs/main.wdio.conf.js";
import * as path from 'path';
import AllureReporter from "@wdio/allure-reporter";
import { assert } from "chai";

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