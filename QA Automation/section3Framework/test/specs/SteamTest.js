import Browser from "../../framework/browser/Browser.js";
import SteamHomePage from "../pageObjects/SteamPages/SteamHomePage.js"
import SteamDeckPage from "../pageObjects/SteamPages/SteamDeckPage.js";
import { mainConfig, data } from "../../framework/configs/main.wdio.conf.js";
import Logger from "../../framework/utils/Logger.js";
import { assert } from "chai";

// baseUrl: "https://store.steampowered.com/"

describe("Test the steam page", ()=> {
    it("The categories Page should be displayed", async() => {
        await Browser.openUrl(mainConfig.baseUrl);

        //1 Main Page should be displayed
        assert.isTrue(await SteamHomePage.isPageOpened());

        //2. Click on Steam Deck Button
        await SteamHomePage.clickCategories();
        await SteamHomePage.clickSteamDeck();
        assert.strictEqual(await SteamDeckPage.gettingTextLabel(), data.expectedTitle); 
    });
});