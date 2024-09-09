import Browser from "../../framework/browser/Browser.js";
import AddRemoveElementPage from "../pageObjects/AddRemoveElementPage.js";
import { assert } from "chai";

describe('Add/Remover Element Test', function () {
    it('Check behaviour of Delete button', async function() {
        await Browser.openUrl('https://te-internet.herokuapp.com/add_remove_elements/');

        await AddRemoveElementPage.clickAddElementButton();
        assert.isTrue(await AddRemoveElementPage.isDeleteElementButtonDisplayed(), 'Delete Element Button is not displayed');

        await AddRemoveElementPage.clickDeleteElementButton();
        assert.isTrue(await AddRemoveElementPage.isNotDeleteElementButtonDisplayed(), 'Delete Element Button still displayed');
    });
});