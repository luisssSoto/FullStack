import { assert } from "chai";
import Browser from "../../framework/browser/Browser.js";
import { encryptedData, mainConfig} from "../../framework/configs/main.wdio.conf.js";
import MainLoginPage from "../pageObjects/LoginPage/MainLoginPage.js";
import SignInPage from "../pageObjects/LoginPage/SignInPage.js";
import UserNamePage from "../pageObjects/LoginPage/UserNamePage.js";
import CryptoJS from "crypto-js";
import Logger from "../../framework/utils/Logger.js";

const bytes = CryptoJS.AES.decrypt(encryptedData, mainConfig.secret);
const originalData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

describe("Login Test", () => {
    it("It should login successfully", async() => {
        //Open page
        await Browser.openUrl(originalData.loginPage.baseUrl);

        //1. is it displayed
        assert.isTrue(await MainLoginPage.isPageOpened());

        //2. is the second one displayed
        await MainLoginPage.clickSignIn();
        assert.isTrue(await SignInPage.isPageOpened());

        //3. set userName and password input
        await SignInPage.setUserName(mainConfig.userName);
        await SignInPage.setPassword(mainConfig.password);
        await SignInPage.clickOnSignInButton();

        //4. check wheter the username login page is displayed
        await UserNamePage.clickOnProfile();
        Logger.info(`Username: ${await UserNamePage.getUserNameText()}`);
        assert.strictEqual(await UserNamePage.getUserNameText(),originalData.loginPage.userName, "The Usernames are not equal" );
    });
}); 