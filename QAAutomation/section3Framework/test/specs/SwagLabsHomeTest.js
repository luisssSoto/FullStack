import Browser from "../../framework/browser/Browser.js";
import SwagLabsLoginPage from '../pageObjects/SwagLabs/SwagLabsLoginPage.js';
import SwagLabsHomePage from "../pageObjects/SwagLabs/SwagLabsHomePage.js";
import { mainConfig } from "../../framework/configs/main.wdio.conf.js";
import { assert } from 'chai';

describe('Test at Swag Labs Page', () => {
    it('It should login correctly with the credentials of the user', async() => {
        // baseUrl: https://www.saucedemo.com/
        await Browser.openUrl(mainConfig.baseUrl);

        assert.isTrue(await SwagLabsLoginPage.isPageOpened(), 'The page has not been opened');

        await SwagLabsLoginPage.setusernameInput('standard_user');
        await SwagLabsLoginPage.setPasswordInput('secret_sauce');
        await SwagLabsLoginPage.clickOnLoginButton();
        assert.isTrue(await SwagLabsHomePage.isPageOpened(), 'The page has not been opened');

        assert.strictEqual(await SwagLabsHomePage.getHomePageName(), 'Products', 'The string is not equal');
        

    });
});