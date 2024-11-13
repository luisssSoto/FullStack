import BasePage from '../../../framework/page/BasePage.js';
import { Label } from '../../../framework/elements/index.js';

class UIHomePage extends BasePage{
    constructor(){
        super(new Label('//h1[@id="title"]', "Home Title UI"), "UI Page");
        this.sampleLink = new Label('//a[contains(@href,"sampleapp")]', "Sample Link");
    };
    async clickOnSampleLink(){
        await this.sampleLink.click();
    };
};
export default new UIHomePage();