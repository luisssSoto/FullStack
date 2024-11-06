import BasePage from "../../../framework/page/BasePage.js";
import { Label, Button } from "../../../framework/elements/index.js";
import Logger from "../../../framework/utils/Logger.js";

class UIAutomationPlaygroundHiddenPage extends BasePage{
    constructor(){
        super(new Label('h3:first-of-type', "Hidden Layers Title"), "Hidden Layers Page");
        this.parentContainer = new Label('div #spa', "Parent Container")
        this.greenButtonContainer = new Label('div[style="z-index: 1;"]', "Green Button Container");
        this.blueButtonContainer = new Label('div[style="z-index: 2;"]', "Blue Button Container");
        this.greenButton = new Button('#greenButton', "Green Button");
        this.blueButton = new Button('#blueButton', "Blue Button");
    };
    async getGreenButtonContainerStyle(){
        return this.greenButtonContainer.getAttribute("style");
    };
    async clickOnGreenButton(){
        await this.greenButton.click();
    };
    async getBlueButtonContainerStyle(){
        return this.blueButtonContainer.getAttribute("style");
    };
    async clickOnBlueButton(){
        await this.blueButton.click();
    };
    async getAllChildrenContainers(){
        return this.parentContainer.findAll(Label, '//div[@class="spa-view"]', "Button Containers");
    };
};
export default new UIAutomationPlaygroundHiddenPage();
