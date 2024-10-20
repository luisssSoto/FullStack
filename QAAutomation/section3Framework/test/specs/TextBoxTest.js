import Browser from "../../framework/browser/Browser.js";
import { mainConfig} from "../../framework/configs/main.wdio.conf.js";
import { data } from '../../framework/configs/main.wdio.conf.js';
import TextBoxPage from "../pageObjects/TextBoxPage.js";
import { assert } from "chai";

const myMentorName = String(data.fullName);
describe("Testing Text Box", ()=> {
    it("The name should be displayed", async() => {
        // 1) Go to the url: https://demoqa.com/text-box
        await Browser.openUrl(mainConfig.baseUrl);

        // 2) Assert page is displayed
        assert.isTrue(await TextBoxPage.isPageOpened());

        // 3) Send your name to the "Full Name" textBox
        await TextBoxPage.typeFullName(myMentorName);

        // 4) Click submit button
        await TextBoxPage.clickSubmit();

        // 5) Prepared name is displayed at the bottom
        assert.strictEqual(await TextBoxPage.retrievingName(), myMentorName, "The names are not equal");
    });
});