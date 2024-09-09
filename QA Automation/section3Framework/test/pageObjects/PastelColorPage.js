import BasePage from '../../framework/page/BasePage.js';
import { Label, Button } from '../../framework/elements/index.js';
import { PreciseTextLocator } from '../../framework/utils/locatorHelper.js';
import Browser from '../../framework/browser/Browser.js';
import ElementStateProvider from '../../framework/elements/helper/StateProvider.js';

class PastelColorPage extends BasePage {
    constructor() {
        super(new Label('//*[text()="Pastel" and @tab="pastel"]', 'Pastel Color'), 'Pastel Color Page');

        // Add elements in order to interact with
        this.paletteButton = new Button('//div[@data-code="d1e9f6f6eacbf1d3ceeecad5"]', 'Palette Button');
    }

    //Adding methods
    async clickPaletteButton() {
        await this.paletteButton.click();
    }
    async getTitleUrl() {
        return await Browser.getCurrentUrl();
    };
};
//Exporting an instance of the class
export default new PastelColorPage();
// class JavaScriptAlertsPage extends BasePage {
//     constructor() {
//         super(new Label(PreciseTextLocator('JavaScript Alerts')), 'JavaScript Alerts Page');

//         // Add elements to interect with
//         this.forJSAlertButton = new Button('//*[@onclick="jsAlert()"]', 'JS Alert Button');
//         this.resultLabel = new Label('//*[@id="result"]', 'Result Label');

//     };
//     async clickForJSAlertButton() {
//         await this.forJSAlertButton.click();
//     };
//     async acceptJSAlert() {
//         await Browser.Dialog.acceptDialog();
//     };
//     async getResultText() {
//         return this.resultLabel.getText();
//     };
// };
// export default new JavaScriptAlertsPage();