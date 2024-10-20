import BasePage from "../../../framework/page/BasePage.js";
import { Label, Button } from "../../../framework/elements/index.js";
import { PreciseTextLocator } from "../../../framework/utils/locatorHelper.js";

class SortableTableMain extends BasePage{
    constructor(){
        super(new Label(PreciseTextLocator('Welcome to the-internet'),"Welcome to the internet Title"), "Welcome to the internet Page");
        this.navigationLink = (text) => new Button(PreciseTextLocator(text), `Navigation Link ${text}`);
    };
    async clickOnLink(textLocator){
        await this.navigationLink(textLocator).click();
    };
};
export default new SortableTableMain();