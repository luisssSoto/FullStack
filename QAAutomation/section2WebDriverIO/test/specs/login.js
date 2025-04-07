"use strict";

import {$, $$, browser, expect} from '@wdio/globals';

describe("Testing login webpage", async function() {
    it('should enter to the home page', async () => {
        await browser.navigateTo('https://www.saucedemo.com/');

        let userNameField = await $('//input[@id="user-name"]');
        let passwordField = await $('input#password');

        let loginCredentials = await $$('//div[text()="standard_user"]');
        console.log('MY CREDENTIALS: ', loginCredentials);
        let myElements = await loginCredentials.getElements();
        console.log('My Elements: ', myElements);
        let firstElement = await myElements[0].getText();
        console.log(`My first element: ${firstElement}`);
        let firstUser = await firstElement.slice(24, 37);
        console.log(`My first user name: ${firstUser}`);

        await userNameField.setValue(firstUser);
        await passwordField.setValue('secret_sauce');

        let submitButton = await $('//input[@id="login-button"]');
        await submitButton.click();

        let productsButton = await $('span.title').waitForExist({timeout: 5000});

        expect(await productsButton).toBeTruthy();
    });
    it('should add the item to the shoping cart', async function () {
        let jacketItem = await $('//a[@id="item_5_title_link"]');
        await jacketItem.click();
        let addCartButton = await $('//button[@id="add-to-cart"]');
        await addCartButton.click();
        let shoppingCartIcon = await $('//a[@class="shopping_cart_link"]');
        let numberOfItems = await shoppingCartIcon.getElement();
        console.log(`Number of Items: ${await numberOfItems.getText()}`);
        await shoppingCartIcon.click();
        let yourCartPage = await $('//span[text()="Your Cart"]').waitForDisplayed({timeout: 5000});
        expect(await yourCartPage).toBeTruthy();
    
        let selectedItem = await $('//div[text()="Sauce Labs Fleece Jacket"]');
        expect(await selectedItem.getText()).toEqual(await jacketItem.getText());
    });
});