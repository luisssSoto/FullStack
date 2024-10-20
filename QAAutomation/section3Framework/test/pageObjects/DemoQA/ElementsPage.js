import BasePage from "../../../framework/page/BasePage.js";
import { Label, Button } from "../../../framework/elements/index.js";
import { PreciseTextLocator } from "../../../framework/utils/locatorHelper.js";

class ElementsPage extends BasePage {
    constructor(){
        super(new Label(PreciseTextLocator("Elements"),"Elements Button"), "Elements Page");
        this.elementsButton = new Button('//div[@class="header-text" and text()="Elements"]', "Elements Button");
    };
};
export default new ElementsPage();