import Browser from "../../framework/browser/Browser.js";
import { mainConfig, data} from "../../framework/configs/main.wdio.conf.js";
import SortableTableMain from "../pageObjects/SortableTables/SortableTableMain.js";
import SortableDataTablesPage from "../pageObjects/SortableTables/SortableTablesPage.js";
import { assert } from "chai";

describe("Sortable Table Test", () => {
    it("Mails should be equal", async() => {
        await Browser.openUrl(mainConfig.baseUrl);
        await SortableTableMain.clickOnLink("Sortable Data Tables");
        let table2 = await SortableDataTablesPage.getColumnValues();
        for await (const email of table2) {
            let isEmailInList = data.sortableTable.emails.includes(email);
            assert.isTrue(isEmailInList);
        };
    });
});