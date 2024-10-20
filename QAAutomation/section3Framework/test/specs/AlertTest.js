import Browser from '../../framework/browser/Browser.js';
import MainPage from '../pageObjects/MainPage.js';
import JavaScriptAlertsPage from '../pageObjects/JavaScriptAlertsPage.js';
import { assert } from 'chai';

const successfulMessage = 'You successfully clicked an alert';

describe('Alert Test', function () {
    it('Interaction with JavaScript Alert', async function () {
        await Browser.openUrl('https://the-internet.herokuapp.com/');
        
        //Navigate to 'JavaScript Alerts'
        await MainPage.clickNavigationLink('JavaScript Alerts');

        await JavaScriptAlertsPage.clickForJSAlertButton();

        await JavaScriptAlertsPage.acceptJSAlert();
        
        //Add assertion to check successfulMessage
        assert.strictEqual(await JavaScriptAlertsPage.getResultText(), successfulMessage, 'Wrong result of interaction with JSAlert');
    });
});