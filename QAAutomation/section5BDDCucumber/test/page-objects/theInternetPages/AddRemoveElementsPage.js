import BasePage from "../../../framework/page/BasePage.js";
import { Label, Button } from "../../../framework/elements/index.js";
import { PartialTextLocator } from "../../../framework/utils/locatorHelper.js";

class AddRemoveElementsPage extends BasePage{
    constructor(){
        super(new Label(PartialTextLocator('Add/'), 'Add Remove Elements Title'), "Add Remove Elements Page");
        this.addButton = new Button('//button[text()="Add Element"]', "Add Button");     
        this.deleteButton = new Button('//button[text()="Delete"]', "Delete Button");
    };
    async clickOnAddButton(){
        await this.addButton.click();
    };
    async isDeleteButtonDisplayed(){
        return await this.deleteButton.state().isDisplayed();
    };
    async clickOnDeleteButton(){
        this.deleteButton.click();
    };
    async isNotDeleteButtonDisplayed(){
        return await this.deleteButton.state().waitForDisplayed({reverse: true});
    };
};
export default new AddRemoveElementsPage();