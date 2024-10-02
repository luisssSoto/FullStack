// import { Key } from 'webdriverio'
import { Key } from 'webdriverio';
import {  $, browser, expect } from '@wdio/globals';

const searchedElement = 'key';

describe('testing key object', function() {
    it('should copy$paste the text', async() =>{
        await browser.url("https://webdriver.io/");
        const copyElement = await $('//span[text()="Search"]');
        await copyElement.click();

        await browser.keys([Key.Ctrl, 'a']);
        await browser.keys([Key.Ctrl, 'c']);

        const searchButton = await $('//span[text()="Search"]');
        await searchButton.click();
        await browser.keys([Key.Ctrl, 'v']);

        await expect(searchButton).toHaveValue(await copyElement.getText());
        
    })
})

// it('should copy&paste from one input to another', async () => {
//     const $copyInput = await $('#copy')
//     const $pasteInput = await $('#paste')

//     // copies text from an input element
//     await $copyInput.setValue('some text')
//     await browser.keys([Key.Ctrl, 'a'])
//     await browser.keys([Key.Ctrl, 'c'])

//     // inserts text from clipboard into input element
//     await $pasteInput.click()
//     await browser.keys([Key.Ctrl, 'v'])

//     await expect($pasteInput).toHaveValue('some text')
// })