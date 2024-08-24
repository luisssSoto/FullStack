import {expect, $, browser} from '@wdio/globals';
import * as path from 'path';
import * as fs from 'fs';

const fileName = "LambdaTest.txt";

describe('File Download test', () => {
    before('create downloads folder', async () => {
        fs.mkdirSync(global.downloadDir)
    });
    it('file should be downloaded to the default download directory', async () => {
        await browser.url('https://the-internet.herokuapp.com/download');

        let fileLink = await $(`[href="download/${fileName}"]`);
        await expect(fileLink).toExist();

        await fileLink.click();
        let downloadedFilePath = path.join(global.downloadDir, fileName);

        await browser.waitUntil(() => {
            return fs.existsSync(downloadedFilePath);
        });

        await expect(fs.existsSync(downloadedFilePath)).toBeTruthy();
    });
    after('delete downloads folder', async() => {
        fs.rmSync(global.downloadDir, {recursive: true})
    });
});