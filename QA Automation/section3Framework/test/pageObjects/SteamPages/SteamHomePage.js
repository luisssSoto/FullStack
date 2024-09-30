import BasePage from "../../../framework/page/BasePage.js";
import { Label, Button } from "../../../framework/elements/index.js";

class SteamHomePage extends BasePage{
    constructor(){
        super(new Label('//a[@class="home_page_takeover_sizer ds_no_flags app_impression_tracked"]', "anchor home"), "Steam Home Page");
        this.categoriesButton = new Button('//a[@class="pulldown_desktop" and text()="Categories"]', "Categories Button");
        this.steamDeckButton = new Button('//a[@class="popup_menu_item"]/span[text()="Steam Deck"]', "Steam Deck Button");
    };
    async clickCategories(){
        this.categoriesButton.click();
    };
    async clickSteamDeck(){
        this.steamDeckButton.click();
    };
};

export default new SteamHomePage();

