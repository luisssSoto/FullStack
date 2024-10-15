import Browser from "../../framework/browser/Browser.js";
import MainPage from "../pageObjects/MainPage.js";
import FileDownloadedPage from "../pageObjects/FileDownloadedPage.js";
import { assert } from 'chai';
import { downloadDir, mainConfig, data } from '../../framework/configs/main.wdio.conf.js';
import * as path from 'path';
import AllureReporter from "@wdio/allure-reporter";

const downloadedFilePath = path.join(downloadDir, data.fileDownloadedTest.fileName);

describe('File Download Test', function() {
    it('Check that file downloaded', async function() {
        AllureReporter.addStep(`Browser opening the webpage: ${mainConfig.baseUrl}`)
        await Browser.openUrl(mainConfig.baseUrl);

        AllureReporter.addStep("Click on \"File Download\" link");
        await MainPage.clickNavigationLink('File Download');

        AllureReporter.addStep(`Check if the file: ${data.fileDownloadedTest.fileName} is displayed`);
        assert.isTrue(await FileDownloadedPage.isFileLabelDisplayed(data.fileDownloadedTest.fileName), `File with name ${data.fileDownloadedTest.fileName} does not exist on the page`);

        AllureReporter.addStep("Click on the file to start download it");
        await FileDownloadedPage.downloadFile(data.fileDownloadedTest.fileName);

        AllureReporter.addStep("Check if the file is downloaded locally");
        assert.isTrue(await Browser.File.isFileExist(downloadedFilePath), 'File does not downloaded');
    });
});