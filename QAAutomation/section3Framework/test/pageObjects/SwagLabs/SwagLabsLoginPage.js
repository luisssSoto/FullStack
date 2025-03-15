"use strict";
import BasePage from '../../../framework/page/BasePage.js';
import { Label, Input, Button} from '../../../framework/elements/index.js';

class SwagLabsLoginPage extends BasePage {
    constructor() {
        super(new Label('//div[@class="login_logo"]', 'Login Title Page'));

        this.usernameInput = new Input('input#user-name', 'Username Input');
        this.passwordInput = new Input('input#password', 'Password Input');
        this.loginButton = new Button('input#login-button', 'Login Button');
    };
    async setusernameInput (userName) {
        await this.usernameInput.typeText(userName);
    };
    async setPasswordInput(password) {
        await this.passwordInput.typeSecret(password);
    };
    async clickOnLoginButton() {
        await this.loginButton.click();
    };
};
export default new SwagLabsLoginPage();