import BasePage from '../../framework/page/BasePage.js';
import { Button, Label } from '../../framework/elements/index.js';
import { PreciseTextLocator } from '../../framework/utils/locatorHelper.js';

class MainPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('Welcome to the internet'), 'Welcome Label'), 'Main Page');
        this.navigationLink = (text) => new Button(PreciseTextLocator(text), `Navigation link: ${text}`);
        this.labelLink = (text) => new Label(text, `Navigation Link 2: ${text}`);
    };
    async clickNavigationLink(navigationText) {
        await this.navigationLink(navigationText).click();
    };
    async clickNavigationLink2(navigationText){
        await this.labelLink(navigationText).click();
    }
};
export default new MainPage();