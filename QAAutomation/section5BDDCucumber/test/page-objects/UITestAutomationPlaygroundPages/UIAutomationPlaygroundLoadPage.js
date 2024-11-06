import BasePage from "../../../framework/page/BasePage.js";
import { Label, Button } from "../../../framework/elements/index.js";

class UIAutomationPlaygroundLoadPage extends BasePage{
    constructor(){
        super(new Label('//h3[contains(text(),"Load")]', "Title Load Delays"), "Load Delays Page");
        this.appearingBlueButton = new Button('button.btn.btn-primary', "Appering Blue Button");
    };
    async isAppearingBlueButton(){
        return this.appearingBlueButton.state().isDisplayed();
    };
};
export default new UIAutomationPlaygroundLoadPage();