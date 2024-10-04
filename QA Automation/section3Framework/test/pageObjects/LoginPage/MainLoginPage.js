import BasePage from '../../../framework/page/BasePage.js';
import { Label, Button } from '../../../framework/elements/index.js';

class MainLoginPage extends BasePage{
    constructor(){
        super(new Label('//h1[@class="h0-mktg mb-3 position-relative z-2"]', "Title Let's..."),"GitHub Let's Page");
        this.signInButton = new Button('//div[@class="position-relative HeaderMenu-link-wrap d-lg-inline-block"]/a', "Sign In Button");
    };
    async clickSignIn(){
        await this.signInButton.click();
    };
};
export default new MainLoginPage();
