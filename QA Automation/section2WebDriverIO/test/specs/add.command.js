import { browser } from '@wdio/globals';
import assert from 'assert';

const url = "https://webdriver.io/";
const title = "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO";

// creating a new command
await browser.addCommand("getABunchData", async() => {
    return {
        url: await browser.getUrl(),
        title: await browser.getTitle(),
        cookies: await browser.getAllCookies()
    }
});

describe("Testing addComand() method", () => {
    it("create your own function", async() =>{
        await browser.navigateTo("https://webdriver.io/");
        const data = await browser.getABunchData();
        for (const attribute in data) {
            if (Object.prototype.hasOwnProperty.call(data, attribute)) {
                const value = data[attribute];
                console.log(`${attribute}: ${value}`)
            }
        }
        console.log(`url: ${data.url} \n title: ${data.title}`);
        assert.strictEqual(data.url, url);
        assert.strictEqual(data.title, title);
    });
});
