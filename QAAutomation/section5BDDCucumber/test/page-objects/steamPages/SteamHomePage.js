import BasePage from '../../../framework/page/BasePage.js'
import { Button, Label } from '../../../framework/elements/index.js'

class SteamHomePage extends BasePage{
    constructor(){
        super(new Label('//a[@class="promo_link"]', "Main Image"),"Main Image Web Page");
        this.aboutButton = new Button('//div[@class="supernav_container"]/a[contains(text(),"About")]', "About Button")
    };
    async clickOnAbout(){
        await this.aboutButton.click();
    };
};
export default new SteamHomePage();