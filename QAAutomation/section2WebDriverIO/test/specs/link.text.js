//html/body/div[3]/div[1]/div/div/table[1]/tbody/tr/td[1]/p[2]/a
//a[@href="tutorial/index.html"]
import {$, browser } from '@wdio/globals';

const text = "Tutorial";
const ref = "tutorial/index.html";

describe("Testing Link element", () => {
    it("match href and content of it", async() => {
        await browser.navigateTo("https://docs.python.org/3.12/index.html");
        const link = await $('=Tutorial');

        const textLink = await link.getText();
        console.log(`text link: ${textLink}`);
        const hrefLink = await link.getAttribute('href');
        console.log(`href link: ${hrefLink}`);

        await expect(link).toHaveText(text);
        await expect(link).toHaveAttribute('href', ref);

        //Partial link Text
        const partialLink = await $('*=embedding');
        console.log(`partial link: ${await partialLink.getText()}`);
        console.log(`href: ${await partialLink.getAttribute('href')}`);
        
        await expect(partialLink).toHaveText("Extending and embedding");
        await expect(partialLink).toHaveAttribute('href', "extending/index.html");
    });
});