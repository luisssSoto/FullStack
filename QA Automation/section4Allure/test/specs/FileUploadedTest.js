import Browser from "../../framework/browser/Browser.js";
import MainPage from "../pageObjects/MainPage.js";
import FileUploaderPage from "../pageObjects/FileUploaderPages/FileUploaderPage.js";
import UploadedFilesPage from "../pageObjects/FileUploaderPages/UploadedFilesPage.js";
import { assert } from 'chai';
import * as path from 'path';
import AllureReporter from "@wdio/allure-reporter";
import { mainConfig, data } from "../../framework/configs/main.wdio.conf.js";

const fullPathToFile = path.resolve(`./upload/${data.fileDownloadedTest.fileName}`);

describe('File Upload Test', function() {
    it('Check that file uploaded', async function() {
        AllureReporter.addStep(`Browser opening the url: ${mainConfig.baseUrl}`)
        await Browser.openUrl(mainConfig.baseUrl);

        AllureReporter.addStep("Click on \"File Upload\" link");
        await MainPage.clickNavigationLink('File Upload');

        AllureReporter.addStep("Set the file will be uploaded");
        await FileUploaderPage.uploadFile(fullPathToFile);

        AllureReporter.addStep("Check if the file is uploaded");
        assert.strictEqual(await UploadedFilesPage.getUploadedFiles(), data.fileDownloadedTest.fileName, 'Incorrect list of uploaded files');
    });
});