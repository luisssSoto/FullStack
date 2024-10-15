import Browser from '../../framework/browser/Browser.js';
import MainPage from '../pageObjects/MainPage.js';
import JavaScriptAlertsPage from '../pageObjects/JavaScriptAlertsPage.js';
import { assert } from 'chai';
import { mainConfig, data } from '../../framework/configs/main.wdio.conf.js';
import allureReporter from '@wdio/allure-reporter';

describe('Alert Test', function () {
    it('Interaction with JavaScript Alert', async function () {
        allureReporter.addStep(`Browser opening in ${mainConfig.baseUrl}`);
        await Browser.openUrl(mainConfig.baseUrl);
        
        //Navigate to 'JavaScript Alerts'
        allureReporter.addStep("Openning the main page");
        await MainPage.clickNavigationLink('JavaScript Alerts');

        allureReporter.addStep("Click on Alert Button");
        await JavaScriptAlertsPage.clickForJSAlertButton();

        allureReporter.addStep("Accept the Alert");
        await JavaScriptAlertsPage.acceptJSAlert();
        
        //Add assertion to check successfulMessage
        allureReporter.addStep("Check the strings are equal");
        assert.strictEqual(await JavaScriptAlertsPage.getResultText(), data.alertTest.successfullMessage, 'Wrong result of interaction with JSAlert');
    });
});