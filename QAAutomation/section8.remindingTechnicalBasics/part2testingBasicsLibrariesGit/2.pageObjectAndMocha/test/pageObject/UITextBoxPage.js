"use strict";
import BasePage from "../../framework/page/BasePage.js";
import { Button, Input, Label } from "../../framework/elements/index.js"

class UITextBoxPage extends BasePage {
    constructor() {
        super(new Label('//div[@class="header-text" and text()="Elements"]', 'Text Box Section'), 'Text Box Page');
        this.textBoxButton = new Button('//span[text()="Text Box"]', 'Text Box Button');
        this.fullNameField = new Input('input#userName', 'Full Name Field');
        this.emailField = new Input('input#userEmail', 'Email Field');
        this.submitButton = new Button('button#submit', 'Submit Button');
        this.nameLabel = new Label('p#name', 'Name Label');
        this.emailLabel = new Label('p#email', 'Email Label');
    };
    async clickOnTextBoxButton() {
        await this.textBoxButton.click();
    };
    async setUserNameField(userName) {
        await this.fullNameField.typeText(userName);
    };
    async setEmailField(userEmail) {
        await this.emailField.typeText(userEmail);
    };
    async clickOnSubmitButton() {
        await this.submitButton.click();
    };
    async getName() {
        return this.nameLabel.getText();
    };
    async getEmail() {
        return this.emailLabel.getText();
    };
};

export default new UITextBoxPage();