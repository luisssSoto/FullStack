import Browser from "../../../framework/browser/Browser.js";
import BasePage from "../../../framework/page/BasePage.js";
import { Label, Button } from "../../../framework/elements/index.js";

class UIAutomationPlaygroundClassPage extends BasePage{
    constructor(){
        super(new Label('h3:only-of-type', "UI Class Title"), "UI Class Page");
        this.blueButton = new Button('//button[contains(@class,"btn-primary")]', "Blue Button");
    };
    async clickOnBlueButton(){
        await this.blueButton.click();
    };
    async isAlertOpened(){
        return await Browser.Dialog.isDialogOpened()
    };
    async acceptJSAlert(){
        await Browser.Dialog.acceptDialog();
    };
    async isAlertClosed(){
        return await Browser.Dialog.isDialogClosed();
    };
    async retrieveLocator(){
        return this.blueButton.getLocator();
    };
};
export default new UIAutomationPlaygroundClassPage();