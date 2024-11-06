import BasePage from '../../../framework/page/BasePage.js'
import { PreciseTextLocator} from '../../../framework/utils/locatorHelper.js';
import { Label, Button } from '../../../framework/elements/index.js';

class UIAutomationPlaygroundHomePage extends BasePage{
    constructor() {
        super(new Label('h1[id="title"]', "UI Home Title"), "UI Home Page");
        this.link = (text) => (new Button(PreciseTextLocator(text), `${text} Link`));
    };
    async clickOnLink(linkText){
        await this.link(linkText).click();
    };
};
export default new UIAutomationPlaygroundHomePage();