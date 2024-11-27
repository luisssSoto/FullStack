import BasePage from '../../framework/page/BasePage.js';
import { Label, Button } from '../../framework/elements/index.js';

class UIAutomationScrollbarsPage extends BasePage{
    constructor(){
        super(new Label('//h3[text()="Scrollbars"]', 'Scrollbars Title'), 'Scrollbars Page');
        this.hiddingButton = new Button('#hidingButton', 'Hidding Button');
    };
    async isHiddingButtonDisplayed(){
        return this.hiddingButton.state().isDisplayed();
    };
    async getTextHiddingButton(){
        return this.hiddingButton.getText();
    };
};
export default new UIAutomationScrollbarsPage();