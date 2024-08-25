import {$, browser } from '@wdio/globals';

let heightTest = 516;
let widthTest = 516;

describe("Testing setWindowSize method", () =>{
    it("should change the size of the window", async() =>{
        await browser.navigateTo("https://webdriver.io");
        await browser.setWindowSize(heightTest, widthTest);
        const objWindow = await browser.getWindowSize();

        await expect(objWindow.height).toEqual(heightTest);
        await expect(objWindow.width).toEqual(widthTest);

        console.log(`OBJECT JSON: ${JSON.stringify(objWindow)}`);

        await browser.maximizeWindow();
        const maxWindow = await browser.getWindowSize();
        for (const attribute in maxWindow) {
            if (Object.prototype.hasOwnProperty.call(maxWindow, attribute)) {
                const value = maxWindow[attribute];
                console.log(`${attribute}: ${value}`);
            }
        }
    });
});