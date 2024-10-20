import { $, expect, browser } from '@wdio/globals';

const isItExist = true;

describe('Testing isExisting() method', () => {
    it('Check if the element exist or not', async() => {
        await browser.url("https://www.flaticon.es/");
        const iconosElement = await $('//ul/li[2]');
        const validation = await iconosElement.isExisting();

        console.log(`${isItExist} == ${validation}`);

        await expect(isItExist).toEqual(validation)
    });
});