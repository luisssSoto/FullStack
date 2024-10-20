import BasePage from '../../../framework/page/BasePage.js';
import { PreciseTextLocator } from '../../../framework/utils/locatorHelper.js';
import { Label } from '../../../framework/elements/index.js';

class UploadedFilesPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('File Uploaded!')), 'Uploaded Files Page');

        this.uploadedFile = new Label('//*[@id="uploaded-files"]', 'Uploaded files');
    }
    async getUploadedFiles() {
        return await this.uploadedFile.getText();
    }
}
export default new UploadedFilesPage();