import { $, browser } from '@wdio/globals';

describe("Testing switchWindow() method", () =>{
    it('should switch to another window', async () => {
        // open url
        await browser.url('https://google.com')
    
        // create new window
        await browser.newWindow('https://webdriver.io')
    
        // switch back via url match
        await browser.switchWindow('google.com');
        const imgGoogle = await $('//img[@alt="Google"]');
        const attributeImg = await imgGoogle.getAttribute("alt");

        console.log(`Attribute image value: ${attributeImg}`);
        await expect (attributeImg).toEqual("Google");
    
        // switch back via title match
        await browser.switchWindow('Next-gen browser and mobile automation test framework for Node.js')
    });
})