import BasePage from "../../../framework/page/BasePage.js";
import { Label, Button } from "../../../framework/elements/index.js";

class MainDynamicControlsPage extends BasePage{
    constructor(){
        super(new Label('//h1[@class="heading"]', "Main Title"), "Main Welcome Internet Page");
        this.linkDynamic = new Button('//a[contains(@href, "/dynamic_controls")]', "Dynamic Link");
    };
    async clickLinkDynamic(){
        await this.linkDynamic.click();
    };
};
export default new MainDynamicControlsPage();