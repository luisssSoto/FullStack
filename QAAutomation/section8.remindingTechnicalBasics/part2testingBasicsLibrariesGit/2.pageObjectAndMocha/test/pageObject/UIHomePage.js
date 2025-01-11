import BasePage from '../../framework/page/BasePage.js'
import { Label, Button } from '../../framework/elements/index.js';

class UIHomePage extends BasePage {
    constructor() {
        super(new Label('img[class="banner-image"]', 'Main Image'), 'Main Page');
        this.elementsLink = new Button('//div/h5[text()="Elements"]', 'Elements Link');
    };
    async clickOnLink() {
        this.elementsLink.click();
    };
};

export default new UIHomePage();