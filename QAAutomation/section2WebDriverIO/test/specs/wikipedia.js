import { $, browser, expect } from  '@wdio/globals';
import * as path from 'path';
import * as fs from 'fs';
import { config } from '../../wdio.conf.js';

const searchExample = "Albert Einstein";
const expectedUrl = "https://en.wikipedia.org/wiki/Albert_Einstein";

describe("Testing wikipedia page", ()=> {
    before("Create download folder", async() => {
        fs.mkdirSync(global.downloadDir);
    });
    it("The file should be downloaded", async() => {
        await browser.url(config.baseUrl);
        let mainTitle = await $('//h1[@class="central-textlogo-wrapper"]');
        let isMainTitlePresent = await mainTitle.waitForExist();
        expect(isMainTitlePresent).toBeTruthy();

        let inputField = await $('//input[@id="searchInput"]');
        await inputField.waitForEnabled()
        await inputField.click();
        await inputField.setValue(searchExample);
        let searchButton = await $('//button[@class="pure-button pure-button-primary-progressive"]');
        await searchButton.waitForClickable();
        await searchButton.click();
        expect(await browser.getUrl()).toEqual(expectedUrl);

        let toolButton = await $('//input[@id="vector-page-tools-dropdown-checkbox"]');
        await toolButton.waitForEnabled();
        await toolButton.click();
        let downloadSpan = await $('//span[contains(text(), "Download as")]');
        await downloadSpan.waitForClickable();
        await downloadSpan.click();
        let nameFileDownloaded = await $('//div[@class="mw-electronpdfservice-selection-label-desc"]');
        let textFileDownloaded = await nameFileDownloaded.getText();
        let downloadButton = await $('//span[@class="oo-ui-labelElement-label"]');
        await downloadButton.waitForClickable();
        await downloadButton.click();

        let downloadedFilePath = path.join(global.downloadDir, textFileDownloaded);
        await browser.waitUntil(() => {
            return fs.existsSync(downloadedFilePath);
        }, {
            timeout: 20000,
            timeoutMsg: "The file wasn't downloaded after 20 seconds"
        });
        expect(await fs.existsSync(downloadedFilePath)).toBeTruthy();
        
        let isDownloadedFileCorrect = downloadedFilePath.endsWith(textFileDownloaded);
        expect(isDownloadedFileCorrect).toBeTruthy();
    });
    after("delete download directory", async() => {
        fs.rmSync(global.downloadDir, {recursive: true});
    });
});