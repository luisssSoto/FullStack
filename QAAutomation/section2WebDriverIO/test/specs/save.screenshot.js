import { $, browser } from '@wdio/globals';
import * as fs from 'fs';

const webDriverImg = "webDriver.png"

describe("Testing saveScreenshot() method", () => {
    it("check wheter the screenshot was taken or not", async() => {
        await browser.url("https://webdriver.io/");
        await browser.saveScreenshot("./" + webDriverImg);

        const logoWDio = await $("//h1[contains(@class,'hero__title')]");
        await expect(logoWDio).toExist();
        
        await logoWDio.saveScreenshot("./logoWDIO.png");

        await expect(fs.existsSync(webDriverImg)).toBeTruthy();

    });
    after('delete the screenshot.png file', async() =>{
        fs.rmSync(webDriverImg);
    })
});