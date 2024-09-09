import Browser from "../../framework/browser/Browser.js";
import MainPage from "../pageObjects/MainPage.js";
import FileUploaderPage from "../pageObjects/FileUploaderPages/FileUploaderPage.js";
import UploadedFilesPage from "../pageObjects/FileUploaderPages/UploadedFilesPage.js";
import { assert } from 'chai';
import * as path from 'path';

const fileName = 'LambdaTest.txt';
const fullPathToFile = path.resolve(`./upload/${fileName}`);

describe('File Upload Test', function() {
    it('Check that file uploaded', async function() {
        await Browser.openUrl('https://the-internet.herokuapp.com/');
        await MainPage.clickNavigationLink('File Upload');

        await FileUploaderPage.uploadFile(fullPathToFile);
        assert.strictEqual(await UploadedFilesPage.getUploadedFiles(), fileName, 'Incorrect list of uploaded files');
    })
})