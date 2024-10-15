import Browser from '../../framework/browser/Browser.js';
import MainPage from '../pageObjects/MainPage.js';
import DataTablesPage from '../pageObjects/DataTablesPage.js';
import { assert } from 'chai';
import AllureReporter from '@wdio/allure-reporter';
import { mainConfig, data } from '../../framework/configs/main.wdio.conf.js';

describe('Data Table test', function () {
    it('Check sum if column lines', async function() {
        AllureReporter.addStep(`Browser opening in: ${mainConfig.baseUrl}`);
        await Browser.openUrl(mainConfig.baseUrl);

        AllureReporter.addStep(`Opening the main page`);
        await MainPage.clickNavigationLink('Sortable Data Tables');
        
        AllureReporter.addStep(`Getting data values and sum them`);
        const dueArray = await (await DataTablesPage.getColumnValues()).map(element => parseFloat(element.replace(data.dataTableTest.currencySign, '')));
        const dueSum = dueArray.reduce((accumulator, currencValue) => accumulator + currencValue);

        AllureReporter.addStep("The values are equal");
        assert.strictEqual(dueSum, data.dataTableTest.expectedSum, 'Sum of due column is not correct');
    });
});