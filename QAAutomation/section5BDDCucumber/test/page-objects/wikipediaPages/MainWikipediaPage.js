import BasePage from "../../../framework/page/BasePage.js";
import { Label, Input, Button, Dropdown } from "../../../framework/elements/index.js";
import Browser from "../../../framework/browser/Browser.js";

class MainWikipediaPage extends BasePage{
    constructor(){
        super(new Label('//span[contains(@class,"central")]', "Wikipedia Main Title"), "Wikipedia Main Page");
        this.inputSearchField = new Input('//input[@id="searchInput"]', "Input Search Field");
        this.submitButton = new Button('//button[contains(@class,"pure")]', "Submit Button");
        this.languageInput = new Input('//input[@id="hiddenLanguageInput"]', "Language Input");
    };
    async setInputSearchField(word){
        await this.inputSearchField.typeText(word);
    };
    async clickOnSubmitButton(){
        await this.submitButton.click();
    };
    async setLanguageDropdown(language){
        await Browser.executeScript( ` const selectElement = document.querySelector("#searchLanguage"); selectElement.value = arguments[0]; selectElement.dispatchEvent(new Event("change", { bubbles: true })); `, language);
    };
};
export default new MainWikipediaPage();