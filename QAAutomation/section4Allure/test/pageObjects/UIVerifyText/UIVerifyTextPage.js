import BasePage from "../../../framework/page/BasePage.js";
import { Label } from "../../../framework/elements/index.js";

class UIVerifyTextPage extends BasePage {
    constructor() {
        super(new Label('//h3[text()="Verify Text"]', "Verify Text Title"), "Verify Text Page");
        this.welcomeText = new Label('(//span[normalize-space(.)="Welcome UserName!"])', "Welcome Text Label");
    };
    async retrieveWelcomeText(){
        return await this.welcomeText.getText();
    };
};
export default new UIVerifyTextPage();