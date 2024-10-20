import { $, expect, browser } from '@wdio/globals';

const searchingElement = "get started";

describe('Testings waitForExist() method', function() {
    it('should wait until search bar appears', async() => {
        await browser.navigateTo("https://webdriver.io/");
        const searchButton = await $('//span[text()="Search"]');
        await searchButton.click();

        const searchButtonHidden = await $('input#docsearch-input');
        await searchButtonHidden.waitForExist({timeout:5000});
        await searchButtonHidden.click();

        await searchButtonHidden.setValue(searchingElement)

        await expect(await searchButtonHidden.getValue()).toEqual(searchingElement);
        console.log(`search button hidden value: ${await searchButtonHidden.getValue()} == ${searchingElement}`);
    });
});