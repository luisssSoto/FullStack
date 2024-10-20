import {$, browser, expect } from '@wdio/globals';

const isItDisplay = true;
const falsy = false;

describe('Testing isDisplayed() method', ()=> {
    it('Check if the anchor element is displayed on time', async() => {
        await browser.navigateTo("https://www.oxigenoarquitectura.com/");
        const anchorElement = await $('//a[starts-with(@class,"elementor")]');

        //expect(await anchorElement.isDisplayed()).toEqual(falsy);

        const spanElement = await $('//*[text()="Entrar"]');
        expect(await spanElement.isDisplayed()).toEqual(falsy);
    });
});