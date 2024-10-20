import { $, browser } from '@wdio/globals';

describe("Testing switchToWindow() method", () => {
    it("it should show in the console the name of the first window", async () => {
        await browser.navigateTo('https://webdriver.io');
        const firstWindow = await browser.getTitle();
        await browser.newWindow('http://json.org');
        const secondWindow = await browser.getTitle();
        console.log("Name of the second window: ", secondWindow);// returns "JSON"

        const handles = await browser.getWindowHandles();
        console.log(`Number of windows opens: ${handles.length}`);

        await browser.switchToWindow(handles[0]);
        console.log(`firstWindow: ${firstWindow} and current window: ${await browser.getTitle()}`);
        await expect (firstWindow).toEqual(await browser.getTitle());
    });
});