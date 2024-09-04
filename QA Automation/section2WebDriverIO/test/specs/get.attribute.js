import {browser, $, expect } from '@wdio/globals';

const idAttribute = "yCnn-NfSxIybUQ2iTuUGq";
describe('Testing getAttribute() method', () => {
    it("the value of the attribute should be equal to idAttribute", async() => {
        await browser.url("https://roadmap.sh/backend");

        const element = await $("//*[@data-node-id='yCnn-NfSxIybUQ2iTuUGq']");
        const valueAttribute = await element.getAttribute("data-node-id");
        
        console.log(`value Attribute: ${valueAttribute} == id Attribute: ${idAttribute}`);
        await expect(valueAttribute).toEqual(idAttribute);
    });
});