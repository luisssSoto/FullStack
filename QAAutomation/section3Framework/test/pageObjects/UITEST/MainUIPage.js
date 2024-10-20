import BasePage from "../../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../../framework/utils/locatorHelper.js";
import { Label, Button} from "../../../framework/elements/index.js";

class MainUIPage extends BasePage{
    constructor(){
        super(new Label('//h1[text()="UI Test Automation"]', "Main Title UI"), "Main UI Page");
        this.clientDelayButton = new Button('//a[@href="/clientdelay"]', "Client Delay Button");
    };
    async clickOnClientDelayButton(){
        await this.clientDelayButton.click();
    };
};
export default new MainUIPage();