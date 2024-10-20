import { $, browser, expect } from '@wdio/globals';
import { config } from '../../wdio.conf.js';

const expectedText = "Steam is the ultimate destination for playing, discussing, and creating games.";

describe("Testing a real scenario", () => {
    it("it should be about button clickable ", async() => {
        await browser.url(config.baseUrl);
        let announcement = await $('//div[@id="home_takeunder_ctn"]');
        let isAnnouncementExist = await announcement.waitForExist();
        expect(isAnnouncementExist).toBeTruthy();

        let aboutButton = await $('//div[@id="global_header"]//a[@class="menuitem " and contains(text(),"About")]');
        await aboutButton.click();
        let mainText = await $('//div[@class="about_subtitle"]');

        expect(await mainText.getText()).toEqual(expectedText);

    })
})