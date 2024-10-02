import BasePage from "../../../framework/page/BasePage.js";
import { Label, Button } from "../../../framework/elements/index.js";

class UserNamePage extends BasePage{
    constructor(){
        super(new Label('//span[@class="Truncate-text "]', "Dashboard Label"), "Dashboard Label Page");
        this.buttonProfile = new Button('//button[@class="Button--invisible Button--medium Button Button--invisible-noVisuals color-bg-transparent p-0"]', "UserName Button");
        this.userNameLabel = new Label('//div[text()="luisssSoto"]', "UserName Label");
    };
    async clickOnProfile(){
        await this.buttonProfile.click();
    };
    async getUserNameText(){
        return await this.userNameLabel.getText()
    };
};
export default new UserNamePage();