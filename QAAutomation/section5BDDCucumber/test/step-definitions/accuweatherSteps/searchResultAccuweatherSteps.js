import { Then } from "@wdio/cucumber-framework";
import AccuWeatherSearchResultsPage from "../../page-objects/AccuweatherPages/AccuWeatherSearchResultsPage.js";
import AllureReporter from "@wdio/allure-reporter";
import { assert } from "chai";

Then(/^The City weather page header contains '(.*)' from the search$/, async(cityName) => {
    AllureReporter.addStep("Checking if the expected city is in the current city string");
    assert.include(await AccuWeatherSearchResultsPage.retrieveResultCity(), cityName, "The cities are not equal")
});