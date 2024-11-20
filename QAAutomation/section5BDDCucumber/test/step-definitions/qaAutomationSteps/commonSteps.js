import Browser from "../../../framework/browser/Browser.js";
import { mainConfig } from '../../../framework/configs/main.wdio.conf.js';
import { Given } from '@wdio/cucumber-framework'; 
import AllureReporter from '@wdio/allure-reporter';

Given('The user is on QA Automation Home page', async() => {
    AllureReporter.addStep('Openning the home page');
    await Browser.openUrl(mainConfig.baseUrl);
});