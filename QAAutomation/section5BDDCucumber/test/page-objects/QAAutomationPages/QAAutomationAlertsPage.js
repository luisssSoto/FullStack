import BasePage from "../../../framework/page/BasePage.js";
import { Label, Frame, Button } from "../../../framework/elements/index.js";

class QAAutomationAlertsPage extends BasePage{
    constructor(){
        super(new Label('//div[text()="Alerts, Frame & Windows"]', 'Alerts Section'),'Alerts Page');
        this.nestedFramesButton = new Button('//span[text()="Nested Frames"]', 'Nested Frames Button');
        this.nestedFramesLabel = new Label('h1.text-center', 'Nested Frames Label');
        this.parentFrame = new Frame('//iframe[@id="frame1"]', 'Parent Frame');
        this.parentFrameLabel = new Label('//body[text()="Parent frame"]', 'Parent Frame Label');
        this.childFrame = new Frame('//iframe[@srcdoc="<p>Child Iframe</p>"]', 'Child Frame')
        this.childFrameLabel = new Frame('//body/p[text()="Child Iframe"]', 'Child Frame Label');
    };
    async clickOnNestedFrames(){
        await this.nestedFramesButton.click();
    };
    async isNestedFramesLabelDisplayed(){
        return this.nestedFramesLabel.state().isDisplayed();
    };
    async getParentFrame(){
        return this.parentFrame;
    };
    async getParentFrameText(){
        return this.parentFrameLabel.getText();
    };
    async getChildFrame(){
        return this.childFrame;
    };
    async getChildFrameText(){
        return this.childFrameLabel.getText();
    };
};
export default new QAAutomationAlertsPage();