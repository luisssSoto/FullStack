import { browser, $, expect } from '@wdio/globals';
import { config } from '../../wdio.conf.js'

const expectedInput = "Text Input";
const randomString = crypto.randomUUID();

describe("Final Testing", () => {
    it("The random text shoul be displayed", async() => {
        //1. step
        await browser.url(config.baseUrl);
        let textInputLink = await $('//a[text()="Text Input"]');
        await textInputLink.click();
        let titleInput = await $('//h3[text()="Text Input"]')
        expect(await titleInput.getText()).toEqual(expectedInput);

        //2. step
        let inputField = await $('//input[@id="newButtonName"]');
        await inputField.click();
        await inputField.setValue(randomString)

        //3. step
        let resultButton = await $('//button[@id="updatingButton"]')
        await resultButton.click();
        expect(await resultButton.getText()).toEqual(randomString);
    });
});

