import Browser from '../../framework/browser/Browser.js';
import MainPage from '../pageObjects/MainPage.js';
import DifferentFramesPage from '../pageObjects/FramePages/DifferentFramesPage.js';
import TinyEditorPage from '../pageObjects/FramePages/TinyEditorPage.js';
import { assert } from 'chai';
import AllureReporter from '@wdio/allure-reporter';
import { mainConfig, data } from '../../framework/configs/main.wdio.conf.js';

const randomString = crypto.randomUUID();
const iframe = TinyEditorPage.iFrame.getPageUniqueElement();

describe('iFrame test', function() {
    it('Interaction with text iFrame', async function() {
        AllureReporter.addStep(`Browser opening url: ${mainConfig.baseUrl}`);
        await Browser.openUrl(mainConfig.baseUrl);

        AllureReporter.addStep("Click on \"Frames\" link");
        await MainPage.clickNavigationLink('Frames');

        AllureReporter.addStep("Click on \"iFrame\" link");
        await DifferentFramesPage.clickIFrameButton();

        AllureReporter.addStep("Swith to child frame");
        await Browser.IFrame.switchToFrame(iframe);
        
        AllureReporter.addStep("Set the input text field");
        await TinyEditorPage.iFrame.inputTextIntoTextArea(randomString);

        AllureReporter.addStep("Check strings are equal");
        assert.stricEqual(await TinyEditorPage.iFrame.getTextFromInputField(), `${data.iFrameTest.defaultInputText}${randomString}`, 'Wrong message');
        
        AllureReporter.addStep("Switch to parent frame");
        await Browser.IFrame.switchToParentFrame();

        AllureReporter.addStep("Save changes");
        await TinyEditorPage.undoChanges();
        
        AllureReporter.addStep("Swith to child frame");
        await Browser.IFrame.switchToFrame(iframe);

        AllureReporter.addStep("Check strings are equal ");
        assert.strictEqual(await TinyEditorPage.iFrame.getTextFromInputField(), `${data.iFrameTest.defaultInputText}`, 'Wrong message into input field');
    });
});