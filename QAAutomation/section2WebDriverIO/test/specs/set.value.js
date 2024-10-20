import { $, expect, browser } from '@wdio/globals';

const modifyingValue = 'Escribe aqui';

describe('Testing setValue() method', function() {
    it('Check if the input value has the right value', async() => {
        await browser.navigateTo('https://developer.mozilla.org/es/docs/Web/HTML/Element/input');

        const iframe = await $('//iframe[@id="frame_39456"]');
        await browser.switchToFrame(iframe);

        const inputElement = await $('input');
        console.log(`Original value... ${await inputElement.getValue()}`)
        
        await inputElement.setValue(modifyingValue);
        const valueElement = await inputElement.getValue();
        console.log(`Modifying value... ${valueElement}`);

        await expect(valueElement).toEqual(modifyingValue);

    });
});