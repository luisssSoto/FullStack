import { $, browser, expect } from '@wdio/globals';

const js = 'JavaScript';

describe('Testing getValue() method', () => {
    it('compare both texts are equal', async() => {
        await browser.navigateTo("https://www.w3schools.com/html/html_forms.asp");
        const inputElement = await $('//input[@id="javascript"]');

        //get value
        const inputValue = await inputElement.getValue();
        console.log(`The value is: ${inputValue}`);

        // For input with checkbox or radio type use isSelected.
        // const inputValue2 = await inputElement.isSelected();
        // console.log(`The second value is ${inputValue2}`);

        await expect(inputValue).toEqual(js);
    });
});