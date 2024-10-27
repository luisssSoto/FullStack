import BasePage from "../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";
import { Label, Input, Button } from "../../framework/elements/index.js";

class SecondDynamicControlsPage extends BasePage{
    constructor(){
        super(new Label(PreciseTextLocator('Dynamic Controls'), 'Second Title'), "Dynamic Controls Page");
        this.successfulMsg = new Label('//p[@id="message"]', "Successful Message");
        this.inputField = new Input('//input[@style="width: 30%;"]', "Input Field");
        this.buttonInput = new Button('//button[@onclick="swapInput()"]', "Input Button");
    };
    async clickOnButtonInput(){
        await this.buttonInput.click();
    };
    async isInputFieldEnabled(isReverse){
        return await this.inputField.state().waitForEnabled({reverse:isReverse});
    };
    async retrieveSuccessfulMsg(){
        return await this.successfulMsg.getText();
    };
    async clickOnInputField(){
        await this.inputField.click()
    };
    async settingInputField(randomText){
        await this.inputField.typeText(randomText);
    };
    async retrievingValue(){
        return await this.inputField.getValue();
    };
};
export default new SecondDynamicControlsPage();