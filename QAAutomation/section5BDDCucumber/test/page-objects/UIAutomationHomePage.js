import BasePage from "../../framework/page/BasePage.js";
import { Button, Label } from "../../framework/elements/index.js";
import { PreciseTextLocator} from '../../framework/utils/locatorHelper.js'

class UIAutomationHomePage extends BasePage{
    constructor(){
        super(new Label(PreciseTextLocator('Quality is not an act, it is a habit.'), 'Home Label Title'), 'UIAutomation Home Page');
        this.scrollbarsButton = new Button('//a[text()="Scrollbars"]', 'Scrollbars Button');
    };
    async clickOnScrollbarsButton(){
        await this.scrollbarsButton.click();
    };
};
export default new UIAutomationHomePage();