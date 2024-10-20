import {$, browser } from '@wdio/globals';

describe("getWindowHandle Test", () => {
    it("it should shows the information of the window in console", async() => {
        await browser.navigateTo("https://www.google.com/");
        console.log(`Information of the window: ${await browser.getWindowHandle()} `);
        console.log(`Information of the window: ${await browser.getWindowHandles()} `);
    })
})