import Browser from "../../../framework/browser/Browser.js";
import { Given, When, Then} from "@wdio/cucumber-framework";
import { mainConfig } from "../../../framework/configs/main.wdio.conf.js";
import AccuWeatherMainPage from "../../page-objects/AccuweatherPages/AccuWeatherMainPage.js";
import AllureReporter from "@wdio/allure-reporter";
import { assert } from "chai";

Given('The user is on the Main Page Accuweather', async() => {
    AllureReporter.addStep("Browser opening the Main Page");
    await Browser.openUrl(mainConfig.baseUrl);
});
Then('A banner is displayed', async() => {
    AllureReporter.addStep("The Banner is displayed");
    assert.isTrue(await AccuWeatherMainPage.isBannerDisplayed(), "The banner is not displayed");
});
When(/^The user inputs '(.*)' in the search field$/, async(cityName) => {
    AllureReporter.addStep("Set the input field according to a city");
    await AccuWeatherMainPage.setInputFieldToAnyCity(cityName);
});
Then('Search results list is displayed', async() => {
    AllureReporter.addStep("Check if the list was displayed");
    assert.isTrue(await AccuWeatherMainPage.isSearchResultsDisplayed(), "The list was not displayed");
});
When('The user clicks on the first search result', async() => {
    AllureReporter.addStep("Click on the first city appears");
    await AccuWeatherMainPage.clickOnFirstOption();
});
Then('The web page is opened', async() => {
    AllureReporter.addStep("Check if the main page is opened");
    assert.isTrue(await AccuWeatherMainPage.isPageOpened(), "The web page is not opened");
});
When('The user chooses the first city in recent locations', async() => {
    AllureReporter.addStep("Click on recent location");
    await AccuWeatherMainPage.clickOnRecentLocation();
});
When('The user click on input field', async() => {
    AllureReporter.addStep("Click on input field");
    await AccuWeatherMainPage.clickOnInputField();
});
Then('Your current location from user is displayed', async() => {
    AllureReporter.addStep("Check if the label exist");
    assert.isTrue(await AccuWeatherMainPage.isCurrentLocationDisplayed(), "The Current location is not displayed");
});