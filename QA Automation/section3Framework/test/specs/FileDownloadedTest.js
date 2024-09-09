import Browser from "../../framework/browser/Browser.js";
import MainPage from "../pageObjects/MainPage.js";
import FileDownloadedPage from "../pageObjects/FileDownloadedPage.js";
import { assert } from 'chai';
import { downloadDir } from '../../framework/configs/main.wdio.conf.js';
import * as path from 'path';

const fileName = 'LambdaTest.txt';
const downloadedFilePath = path.join(downloadDir, fileName);

describe('File Download Test', function() {
    it('Check that file downloaded', async function() {
        await Browser.openUrl('https://the-internet.herokuapp.com/');
        await MainPage.clickNavigationLink('File Download');

        assert.isTrue(await FileDownloadedPage.isFileLabelDisplayed(fileName), `File with name ${fileName} does not exist on the page`);

        await FileDownloadedPage.downloadFile(fileName);
        assert.isTrue(await Browser.File.isFileExist(downloadedFilePath), 'File does not downloaded');
    });
});