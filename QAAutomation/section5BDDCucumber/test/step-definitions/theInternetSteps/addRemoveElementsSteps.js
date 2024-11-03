import AddRemoveElementsPage from '../../page-objects/theInternetPages/AddRemoveElementsPage.js';
import { When, Then } from '@wdio/cucumber-framework';
import AllureReporter from '@wdio/allure-reporter';
import { assert } from 'chai';

AllureReporter.addStep('Check if the page is opened');
Then('I am on the Add Remove Elements page', async() => {
    assert.isTrue(await AddRemoveElementsPage.isPageOpened());
});
AllureReporter.addStep('Click on "Add Button"');
When('I click on "Add Element"', async() => {
    await AddRemoveElementsPage.clickOnAddButton();
});
AllureReporter.addStep('Check if "Delete Button" is displayed');
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