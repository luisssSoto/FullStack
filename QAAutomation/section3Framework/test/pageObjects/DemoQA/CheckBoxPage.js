import BasePage from "../../../framework/page/BasePage.js";
import { Label, Button, Input } from "../../../framework/elements/index.js";
import Logger from "../../../framework/utils/Logger.js";

class CheckBoxPage extends BasePage {
    constructor(){
        super(new Label('//h1[text()="Check Box"]', "Check Box Title"), "Check Box Title Page");
        this.checkBoxButton = new Button('//span[text()="Check Box"]', "Check Box Button");
        this.homeButton = new Button('//span[text()="Home"]', "Home Button");
        this.expandHomeButton = new Button('(//button[@title="Toggle"])[1]', "Expand Home Button");
        this.desktopButton = new Button('//span[text()="Desktop"]', "Desktop Button");
        this.desktopCheckBox = new Input('//input[@id="tree-node-desktop"]', "Home Check Box");
        this.textSuccessArray = async() => {
            let textList = [];
            for(let index = 1; index < 4; index ++){
                Logger.info(`ELEMENT: ${typeof await new Label(`(//span[@class="text-success"])[${index}]`, "Text Success Array").getText()}`)
                textList.push(await new Label(`(//span[@class="text-success"])[${index}]`, "Text Success Array").getText());
            };
            Logger.info(`TEXTLIST: ${textList}`);
            return textList;
        };
    };
    async clickOnCheckBoxButton(){
        await this.checkBoxButton.click();
    };
    async clickOnHomeButton(){
        await this.expandHomeButton.click();
    };
    async clickOnDesktopButton(){
        await this.desktopButton.click();
    };
    async checkingCheckBox(){
        await this.desktopCheckBox.state().waitForExist();
        let isItSelected = await this.desktopCheckBox.state().isSelected();
        if(isItSelected === false) {
            Logger.info(`The element is not selected but we handle it`);
            await this.clickOnDesktopButton();
            isItSelected = await this.desktopCheckBox.state().isSelected();
            return isItSelected;
        }
        else{
            Logger.info(`The element has been selected yet`);
            return isItSelected;
        };
    };
    retrieveTextSuccessArray = async(texts) => {
        let array = await this.textSuccessArray();
        let isItIncluded = true;
        Logger.info(`array: ${array}`);
        await texts.forEach(text => {
            Logger.info(`TYPE OF: ${typeof this.textSuccessArray()}`)
            Logger.info(`ARRAY: ${this.textSuccessArray()}`)
            isItIncluded = array.includes(text);
            if (isItIncluded === false){
                Logger.info(`The text: ${text} is not in the array: ${array}`)
                return isItIncluded;
            }
        });
        return isItIncluded;
    };
};
export default new CheckBoxPage();