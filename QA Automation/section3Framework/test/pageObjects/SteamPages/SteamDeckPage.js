import BasePage from "../../../framework/page/BasePage.js";
import { Label } from "../../../framework/elements/index.js";

class SteamDeckPage extends BasePage{
    constructor(){
        super(new Label('//a[@class="_29bMZB6BOQfTQ_3za-w60I Link" and @href = "https://steamcommunity.com/linkfilter/?u=https%3A%2F%2Fwww.steamdeck.com"]', "Steam Deck Title"), "Steam Deck Title Page");
        this.mainIntroductionSteackDeck = new Label('//div[@class="headersubheadline" and contains(text(),"Powerful,")]', "Powerful Label");
    };
    async gettingTextLabel(){
        return await this.mainIntroductionSteackDeck.getText();
    };
};
export default new SteamDeckPage();