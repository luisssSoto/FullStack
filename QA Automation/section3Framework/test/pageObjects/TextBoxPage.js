// Create Page class:
// In your page class you need to create 2 elements fields:
// "FullName" text field
// "Submit" button
// url: https://demoqa.com/text-box
// TypeFullName
// ClickSubmit
import BasePage from '../../framework/page/BasePage.js';
import { Label, Input, Button } from '../../framework/elements/index.js';

class TextBoxPage extends BasePage{
    constructor(){
        super(new Label('//h1[@class="text-center"]', "text box DemoQa"), "Text Box Page");
        this.inputFullName = new Input('//input[@id="userName"]', "Input Full Name");
        this.buttonSubmit = new Button('//button[@id="submit"]', "Button Submit");
        this.nameLabel = new Label('//p[@id="name"]', "Name Label");
    };
    async typeFullName(anyName){
        await this.inputFullName.typeText(anyName);
    };
    async clickSubmit(){
        await this.buttonSubmit.click();
    };
    async retrievingName(){
        const text = await this.nameLabel.getText();
        return text.slice(5, text.length);
    };
};
export default new TextBoxPage();