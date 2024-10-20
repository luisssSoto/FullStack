import { $, browser } from '@wdio/globals';

let googleWeb = 'Google';

describe("Test getTitle() method", () => {
    it('should be shown on the console the name of the webpage', async() => {
        await browser.navigateTo("https://www.google.com/");
        const nameWebPage = await browser.getTitle();
        console.log(`The name of the webpage is: ${nameWebPage}`);

        const image = await $('//img[@alt="Google"]');
        const altText = await image.getAttribute('alt');
        console.log(`${altText} = ${nameWebPage}`);
        await expect (altText).toEqual(googleWeb);
    })
})