import BasePage from "../../../framework/page/BasePage.js";
import { Label, Table } from "../../../framework/elements/index.js";

class DynamicTablePage extends BasePage{
    constructor(){
        super(new Label('//h3[text()="Dynamic Table"]', "Dynamic Table Title"), "Dynamic Table Page");
        this.rows = [];
        for (let i = 1; i <= 4; i++) {
            let row = {};
            for (let j = 1; j <= 5; j++) {
                row[`column${j}`] = new Label(`(//div[@role="rowgroup"])[2]/div[@role="row"][${i}]/span[${j}]`, `Content Row ${j} of Row ${i}`);
            };
            this.rows.push(row);
        };
        this.yellowLabel = new Label('//p[@class="bg-warning"]', "Yellow Label");
    };
    async getPercentageValue(){
        for (let i = 0; i < this.rows.length; i++) {
            for (let j = 0; j < 1; j++) {
                const nameBrowser = await this.rows[i][`column${j+1}`].getText();
                if (nameBrowser === 'Chrome') {
                    let chromeRow = [];
                    for (let k = 1; k <= 5; k++){
                        const chromeColumn = await this.rows[i][`column${k}`].getText();
                        chromeRow.push(chromeColumn);
                        if (chromeColumn.endsWith('%')){
                            return chromeColumn;
                        };
                    };
                };
           };
        };
    };
    async retrieveYellowLabelText(){
        const percentageData = (await this.yellowLabel.getText()).slice(12, (await this.yellowLabel.getText()).length);
        return percentageData;
    };
};
export default new DynamicTablePage();