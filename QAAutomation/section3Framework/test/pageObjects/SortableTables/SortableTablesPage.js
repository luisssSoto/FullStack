import { Table, Label } from "../../../framework/elements/index.js";
import BasePage from "../../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../../framework/utils/locatorHelper.js";


class SortableTablesPage extends BasePage{
    constructor(){
        super(new Label(PreciseTextLocator("Data Tables", "Data Tables Title"), "Data Tables Page"));

        this.secondTable = new Table('//table[@id="table2"]', "Table 2");
    };
    async getColumnValues(){
        let table = await this.secondTable.parseTableContent();
        return table.map(item => item.Email);
    };
};
export default new SortableTablesPage();