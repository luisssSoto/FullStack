import BasePage from "../../../framework/page/BasePage.js";
import { Label, Button, Input } from "../../../framework/elements/index.js";

class UISampleAppPage extends BasePage{
    constructor() {
        super(new Label('//div[@class="container"]/h3', "Sample App Title"), "Sample App Page");
        this.nameInput = new Input('//input[@name="UserName"]', "User Name Input");
        this.passwordInput = new Input('//input[@name="Password"]', "Password Input");
        this.loginButton = new Button('//button[@id="login"]', "Login Button");
        this.successLabel = new Label('//label[@id="loginstatus"]', "Success Label");
    };
    async setNameInput(userName){
        await this.nameInput.typeText(userName);
    };
    async setPasswordInput(password){
        await this.passwordInput.typeSecret(password);
    };
    async clickOnLoginButton(){
        await this.loginButton.click();
    };
    async getTextSuccessLabel(){
        return this.successLabel.getText();
    };
};
export default new UISampleAppPage();