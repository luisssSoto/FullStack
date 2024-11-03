import BasePage from "../../../framework/page/BasePage.js";
import { Button, Label } from "../../../framework/elements/index.js";

class ThirdWikipediaPage extends BasePage{
    constructor(){
        super(new Label('//h1[@id="firstHeading"]', "Third Title Wikipedia"), "Title Wikipedia Page" );
        this.downloadButton = new Button('//button[@type="submit"]', "Download Button");
        this.mainTitle = new Label('//h1[@id="firstHeading"]', "Third Main Title");
    };
    async clickOnDownloadButton(){
        await this.downloadButton.click();
    };
    async retrieveThirdMainTitle(){
        return this.mainTitle.getText();
    };
};
export default new ThirdWikipediaPage();