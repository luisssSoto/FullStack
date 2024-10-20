import BasePage from "../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";
import { Label, Button } from "../../framework/elements/index.js";

class UIMainPage extends BasePage{
    constructor(){
        super(new Label(PreciseTextLocator('UI Test Automation'), "UI Main Title"), "UI Playground Page");
        this.linkField = (text) => new Button(PreciseTextLocator(text), `link: ${text}`)
    };
    async clickOnLink(textLabel){
        await this.linkField(textLabel).click();
    };

};
export default new UIMainPage();