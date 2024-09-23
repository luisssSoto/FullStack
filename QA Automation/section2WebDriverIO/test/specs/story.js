import { $, browser, expect } from '@wdio/globals';
import { config } from '../../wdio.conf.js';

const expectedText = "Page with onload event handler";

describe("Try to open the URL", () => {
    it("it appears the window ", async() => {
        await browser.navigateTo(config.baseUrl);
        let mainTitle = await $('//h1[contains(text(),"Testing")]');
        let isMainTitleExist = await mainTitle.waitForExist();
        expect(isMainTitleExist).toBeTruthy();

        let linkToNewWindow = await $('//a[@id="open-window-with-onload-alert"]');
        let isLinkClickable = await linkToNewWindow.isClickable();
        expect(isLinkClickable).toBeTruthy();

        await linkToNewWindow.click();
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.acceptAlert();
        let currentText = await $('//p[contains(text(),"Page")]');
        expect(await currentText.getText()).toEqual(expectedText);
        await browser.switchToWindow(handles[0]);
    });
});