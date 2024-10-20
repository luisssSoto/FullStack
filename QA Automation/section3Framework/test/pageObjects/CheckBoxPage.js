import BasePage from "../../framework/page/BasePage.js";
import { Checkbox, Label } from "../../framework/elements/index.js";

class CheckBoxPage extends BasePage {
    constructor(){
        super(new Label('//h1[text()="Check Box"]', "Title Check Box"), "Check Box Page");
        this.checkBoxElement = new Checkbox('//input[@id="tree-node-home"]', "Check Box Element");
    };
    async clickOnCheckBox(){
        await this.checkBoxElement.click();
    };
    async checkingCheckBox(){
        return await this.checkBoxElement.check();
    };

};
export default new CheckBoxPage();