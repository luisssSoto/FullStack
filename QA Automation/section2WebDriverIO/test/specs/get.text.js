import {$, browser, expect} from '@wdio/globals';

const successfullText = "CSS Hard test";

describe("Testing getText() method", () => {
    it("It shoulb be equal to text succesfullText", async() => {
        await browser.navigateTo("https://lenguajecss.com/");

        const cardElement = await $('//a[@class="topic-card"]/h3[text()="CSS Hard test"]');
        const text = await cardElement.getText();

        await expect(text).toEqual(successfullText);

    });
});

//Note: If the element is disabled or not visible and you still want to receive the text content use getHTML as a workaround.