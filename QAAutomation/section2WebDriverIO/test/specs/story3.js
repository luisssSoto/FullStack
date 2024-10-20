import { $, browser, expect } from '@wdio/globals';
import { config } from '../../wdio.conf.js';

describe("Testing dropdown element", ()=> {
    it("The dropdown element should works", async()=> {
        await browser.navigateTo(config.baseUrl);

        let link = await $('//a[text()="Dropdown"]');
        expect(await link.isClickable()).toBeTruthy();
        await link.click();

        let dropdown = await $('//select[@id="dropdown"]');
        expect(await dropdown.isClickable()).toBeTruthy();
        await dropdown.selectByAttribute("value", "2");

        let option2 = await $('//select[@id="dropdown"]/option[@value="2"]');
        // await option2.click()
        // expect(option2).toHaveAttr("selected", "selected");

        expect(await option2.isSelected()).toBeTruthy();
    })
})