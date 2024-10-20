import BasePage from "../../../framework/page/BasePage.js";
import { Label, Input, Button } from "../../../framework/elements/index.js";
import { PreciseTextLocator } from "../../../framework/utils/locatorHelper.js";

class SignInPage extends BasePage {
    constructor(){
        super(new Label(PreciseTextLocator('Sign in to GitHub'), "Sign In Title"), "Sign In Page");
        this.inputUserNameEmail = new Input('//input[@id="login_field"]', "Username Email Input Field");
        this.inputPassword = new Input('//input[@id="password"]', "Password Input Field");
        this.buttonSignIn = new Button('//input[@value="Sign in"]', "Sign In Button");
    };
    async setUserName(userName){
        await this.inputUserNameEmail.typeSecret(userName);
    };
    async setPassword(password){
        await this.inputPassword.typeSecret(password);
    };
    async clickOnSignInButton(){
        await this.buttonSignIn.click();
    };
};
export default new SignInPage();