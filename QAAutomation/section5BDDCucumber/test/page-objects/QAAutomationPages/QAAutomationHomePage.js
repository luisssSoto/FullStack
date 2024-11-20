import BasePage from '../../../framework/page/BasePage.js';
import { Label, Button } from '../../../framework/elements/index.js';

class QAAutomationHomePage extends BasePage{
    constructor(){
        super(new Label('img.banner-image', 'Home Image'), 'Home Page');
        this.alertsButton = new Button('//h5[text()="Alerts, Frame & Windows"]', 'Alerts Button');
    };
    async clickOnAlertsButton(){
        await this.alertsButton.click();
    };
};
export default new QAAutomationHomePage();