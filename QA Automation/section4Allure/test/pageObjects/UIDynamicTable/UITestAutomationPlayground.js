import BasePage from "../../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../../framework/utils/locatorHelper.js";
import { Label, Button} from "../../../framework/elements/index.js";

class UITestAutomationPlayground extends BasePage{
    constructor(){
        super(new Label(PreciseTextLocator('UI Test Automation'), "Main Title"), "UI Test Automation Playground Page");
        this.dynamicTableLink = new Button('//a[@href="/dynamictable"]', "Dynamic Table Link");
    };
    async clickOnDynamicTableLink(){
        await this.dynamicTableLink.click();
    };
};
export default new UITestAutomationPlayground();