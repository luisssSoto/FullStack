import BasePage from "../../../framework/page/BasePage.js";
import { Label } from "../../../framework/elements/index.js";

class AccuWeatherSearchResultsPage extends BasePage{
    constructor(){
        super(new Label('//a[@class="header-city-link"]', "Header City Link"), "Search Results City Page");
        this.headerCity = new Label('//h1[@class="header-loc"]', "Header City Result");
    };
    async retrieveResultCity(){
        return this.headerCity.getText();
    };
};
export default new AccuWeatherSearchResultsPage();