import BasePage from '../../../framework/page/BasePage.js'
import { Button, Label } from '../../../framework/elements/index.js'

class SteamAboutPage extends BasePage{
    constructor(){
        super(new Label('//div[@class="about_subtitle"]', "About Message"), "About Page");
        this.installButton = new Button('div .about_greeting_header ~ div a:first-child', "Install Button");
    };
    async isInstallDisplayed(){
        return this.installButton.state().isDisplayed();
    };
};
export default new SteamAboutPage();