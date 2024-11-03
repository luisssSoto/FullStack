import { Label, Table } from '../../../framework/elements/index.js';
import BasePage from '../../../framework/page/BasePage.js';
import { PreciseTextLocator } from '../../../framework/utils/locatorHelper.js';

class DataTablesPage extends BasePage {
    constructor() {
        //Change call of super() constructor to appropiarite one
        super(new Label(PreciseTextLocator('Data Tables'), 'Data Tables Label'), 'Data Tables Page');

        // Add elements to interect with
        this.firstExampleTable = new Table('//table[@id="table1"]', 'First Table Example');
    }
    async getColumnValues() {
        const table = await this.firstExampleTable.parseTableContent();
        //Return array of Due values
        return table.map(item => item.Due);
    }
}
export default new DataTablesPage();