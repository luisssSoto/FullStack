import BasePage from "../../../framework/page/BasePage.js";
import { Label, Button} from "../../../framework/elements/index.js";

class ClientSideDelayPage extends BasePage{
    constructor(){
        super(new Label('//h3[text()="Client Side Delay"]', "Client Delay Title"),"Client Delay Page");
        this.triggerButton = new Button('//button[@id="ajaxButton"]', "Trigger Button");
        this.calculatedDataLabel = new Label('//p[text()="Data calculated on the client side."]', "Data Calculated Label");
    };

    async clickOnTriggerButton(){
        await this.triggerButton.click();
    };
    async retrieveDataLabel(){
        await this.calculatedDataLabel.state().waitForDisplayed({ timeout: 20000});
        return await this.calculatedDataLabel.getText();
    }
};
export default new ClientSideDelayPage();