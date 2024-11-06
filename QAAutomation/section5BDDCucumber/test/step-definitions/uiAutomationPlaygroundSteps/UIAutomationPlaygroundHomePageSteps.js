import Browser from '../../../framework/browser/Browser.js';
import { Given, When, Then } from '@wdio/cucumber-framework';
import { mainConfig } from '../../../framework/configs/main.wdio.conf.js';
import UIAutomationPlaygroundHomePage from '../../page-objects/UITestAutomationPlaygroundPages/UIAutomationPlaygroundHomePage.js';
import AllureReporter from '@wdio/allure-reporter';
import { assert } from 'chai';

AllureReporter.addStep("Browser is openning the page");
Given('The user is on UI Home page', async() => {
    await Browser.openUrl(mainConfig.baseUrl);
});
AllureReporter.addStep("Check if the web page was opened");
Then('UI Home page should be opened', async() => {
    assert.isTrue(await UIAutomationPlaygroundHomePage.isPageOpened(), "The web page was not opened");
});
AllureReporter.addStep("Click on the link");
When('The user clicks on {string}', async(linkText) => {
    await UIAutomationPlaygroundHomePage.clickOnLink(linkText);
});
