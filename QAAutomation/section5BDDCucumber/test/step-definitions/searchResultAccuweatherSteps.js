import { Then } from "@wdio/cucumber-framework";
import AccuWeatherSearchResultsPage from "../page-objects/AccuweatherPages/AccuWeatherSearchResultsPage.js";
import AllureReporter from "@wdio/allure-reporter";
import { assert } from "chai";

Then(/^The City weather page header contains '(.*)' from the search$/, async(cityName) => {
    AllureReporter.addStep("Checking if the search city and the result city are equals");
    assert.strictEqual((await AccuWeatherSearchResultsPage.retrieveResultCity()).slice(0, cityName.length), cityName, "The cities are not the same");
});