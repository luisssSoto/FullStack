import {$, browser, expect } from '@wdio/globals';

const expectedURL = 'https://mx.pinterest.com/#search';

describe('Testing waitForClickable() method', () => {
    it('the element should be clickable', async() => {
        await browser.url('https://mx.pinterest.com/');
        const scrollElement = await $('//div[@data-test-id="page-scroll-arrow"]');

        await scrollElement.waitForClickable(() => {
            return true;
        });
        console.log(`Current URL: ${await browser.getUrl()} == ${expectedURL}`)
        await scrollElement.click();
        expect(await browser.getUrl()).toEqual(expectedURL)
    });
});