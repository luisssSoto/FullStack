import BasePage from "../../../framework/page/BasePage.js";
import { Label, Button } from "../../../framework/elements/index.js";

class MainDemoQAPage extends BasePage {
    constructor(){
        super(new Label('//a[@href="https://www.toolsqa.com/selenium-training/"]', "Anchor Selenium Training"), "Main Demo QA Page");
        this.elementsButton = new Button('//h5[text()="Elements"]', "Elements Button");
    };
    async clickOnElementsButton(){
        await this.elementsButton.click();
    };
};
export default new MainDemoQAPage();