import BasePage from "../../../framework/page/BasePage.js";
import { Button, Input, Label } from "../../../framework/elements/index.js";

class SecondWikipediaPage extends BasePage{
    constructor() {
        super(new Label('//span[@class="mw-page-title-main"]', "Second Title Wikipedia"), "Secondary Title Page");
        this.inputTools = new Button('//div[@id="vector-page-tools-dropdown"]', "Tools Input");
        this.linkButton = (text) => new Button(`//span[text()="${text}"]`, "Link Button");
        this.mainTitle = new Label('//span[@class="mw-page-title-main"]', "Second Main Title")
    };
    async clickOnInputTools(){
        await this.inputTools.click();
    };
    async clickOnLinkButton(linkText){
        await this.linkButton(linkText).click();
    };
    async retrieveSecondMainTitle(){
        return this.mainTitle.getText();
    };
};
export default new SecondWikipediaPage();