import BasePage from "../../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../../framework/utils/locatorHelper.js";
import { Button, Label } from "../../../framework/elements/index.js";

class UIAutomationPlaygroundDynamicPage extends BasePage{
    constructor(){
        super(new Label('h3:first-of-type', "Dynamic ID Title"), "Dynamic ID Page");
        this.dynamicIdButton = new Button('button.btn.btn-primary', "Dynamic Id Button");
    };
    async isDynamicButtonDisplayed(){
        return this.dynamicIdButton.state().isDisplayed();
    };
    async getIdButton(){
        return this.dynamicIdButton.getAttribute('id');
    };
};
export default new UIAutomationPlaygroundDynamicPage();