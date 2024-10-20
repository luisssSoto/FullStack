import { Frame, Input } from '../../../framework/elements/index.js';
import BasePage from '../../../framework/page/BasePage.js';

class IFrame extends BasePage {
    constructor() {
        super(new Frame('//*[@title="Rich Text Area"]'), 'Text Area IFrame');

        this.inputField = new Input('//*[@id="tinymce"]', 'Input Field inside iFrame');
    }
    async inputTextIntoTextArea(text) {
        await this.inputField.typeText(text);
    }
    async getTextFromInputFiel() {
        return await this.inputField.getText();
    }
}
export default new IFrame();