import BasePage from '../../../framework/page/BasePage.js';
import { Button, Input, Label } from '../../../framework/elements/index.js';

class AccuWeatherMainPage extends BasePage {
    constructor(){
        super(new Input('//*[@class="searchbar-content"]', "Main Input"), "AccuWeather Main Page");
        this.bannerButton = new Button('//div[text()="I Understand"]', "Banner Button");
        this.searchResults = new Button('//*[@class="results-container"]', "Search Results List");
        this.inputField = new Input('//input[@class="search-input"]', "Input Field");
        this.firstCity = new Label('(//p[contains(@class,"search")])[1]', "First City");
        this.recentLocation = new Button('(//a[contains(@class,"recent")])[1]', "Recent Location City");
        this.currentLocation = new Button('//span[@class="current-location-text"]', "Your Curren Location Link");

    };
    async isBannerDisplayed(){
        return this.bannerButton.state().waitForDisplayed();
    };
    async clickOnInputField(){
        await this.inputField.click();
    };
    async setInputField(city){
        await this.inputField.typeText(city); 
    };
    async isSearchResultsDisplayed(){
        return this.searchResults.state().waitForDisplayed();
    };
    async clickOnFirstOption(){
        await this.firstCity.click();
    };
    async clickOnRecentLocation(){
        await this.recentLocation.click();
    };
    async isCurrentLocationDisplayed(){
        return this.currentLocation.state().waitForDisplayed();
    };
};

export default new AccuWeatherMainPage();