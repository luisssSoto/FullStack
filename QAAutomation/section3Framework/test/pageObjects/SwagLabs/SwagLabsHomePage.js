"use strict";
import BasePage from "../../../framework/page/BasePage.js";
import { Label } from "../../../framework/elements/index.js";

class SwagLabsHomePage extends BasePage {
    constructor() {
        super( new Label('//span[@class="title"]', 'Products Label'), 'Products Home Page');

        this.productsHomeLabel = new Label('//span[@class="title"]', 'Products Label');
    };

    async getHomePageName() {
        return this.productsHomeLabel.getText();
    };
};
export default new SwagLabsHomePage();