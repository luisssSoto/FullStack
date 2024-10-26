import Browser from '../../framework/browser/Browser.js';
import { mainConfig } from '../../framework/configs/main.wdio.conf.js';
import MainPage from '../page-objects/MainPage.js';
import AddRemoveElementsPage from '../page-objects/AddRemoveElementsPage.js';
import { Given, When, Then } from '@wdio/cucumber-framework';
import AllureReporter from '@wdio/allure-reporter';
import { assert } from 'chai';

AllureReporter.addStep('Browser opens main page');
Given('I am on the Main Page', async() => {
    await Browser.openUrl(mainConfig.baseUrl);
});
AllureReporter.addStep('User clicks on the link');
When(/^I click on '(.*)' link$/, async(link) => {
    await MainPage.clickNavigationLink(link);
});
AllureReporter.addStep('I am on "Add/Remove Elements web page');
Then('I am on the "Add Remove Elements" page', async() => {
    assert.isTrue(await AddRemoveElementsPage.isPageOpened());
});
AllureReporter.addStep('Click on "Add Button"');
When('I click on "Add Element"', async() => {
    await AddRemoveElementsPage.clickOnAddButton();
});
AllureReporter.addStep('Check if "Delet Button" is displayed');
Then('Element "Delete Button" appears', async() => {
    assert.isTrue(await AddRemoveElementsPage.isDeleteButtonDisplayed());
});
AllureReporter.addStep('Click on "Delete Button"');
When('I click on "Delete Button"', async() => {
    await AddRemoveElementsPage.clickOnDeleteButton();
});
AllureReporter.addStep('Check if "Delete Button" has disappeared');
Then('"Delete Button" element disappears', async() => {
    assert.isTrue(await AddRemoveElementsPage.isNotDeleteButtonDisplayed());
});