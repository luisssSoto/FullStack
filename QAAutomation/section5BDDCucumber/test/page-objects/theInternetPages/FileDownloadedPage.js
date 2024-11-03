import { Label } from '../../../framework/elements/index.js';
import BasePage from '../../../framework/page/BasePage.js';
import { PreciseTextLocator } from '../../../framework/utils/locatorHelper.js';

class FileDownloadedPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('File Downloader'),'File Downloaded Name'), 'File Downloader Page');

        this.fileLabel = (text) => new Label(PreciseTextLocator(text), 'File Label');
    }
    async isFileLabelDisplayed(fileName) {
        return await this.fileLabel(fileName).state().isDisplayed();
    }
    async downloadFile(fileName) {
        this.fileLabel(fileName).click();
    }
}
export default new FileDownloadedPage();