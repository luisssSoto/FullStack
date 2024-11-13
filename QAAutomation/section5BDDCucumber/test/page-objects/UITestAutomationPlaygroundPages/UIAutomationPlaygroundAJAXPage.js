import BasePage from "../../../framework/page/BasePage.js";
import { Label, Button } from "../../../framework/elements/index.js";

class UIAutomationPlaygroundAJAXPage extends BasePage{
    constructor(){
        super(new Label('div.container h3', "Title AJAX"), "Title AJAX Page");
        this.ajaxButton = new Button('h4+button[id="ajaxButton"]', "AJAX Button");
        this.successLabel = new Label('p.bg-success', "Success Label");
    };
    async clickOnAjaxButton(){
        await this.ajaxButton.click();
    }; 
    async isSuccessLabelDisplayed(){
        await this.successLabel.state().waitForDisplayed({timeout: 20000});
        return this.successLabel.state().isDisplayed();
    };
    async getTextSuccessLabel(){
        return this.successLabel.getText();
    };
};
export default new UIAutomationPlaygroundAJAXPage();