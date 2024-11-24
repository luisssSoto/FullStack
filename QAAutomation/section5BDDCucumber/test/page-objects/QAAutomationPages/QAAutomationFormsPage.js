import BasePage from "../../../framework/page/BasePage.js";
import { Button, Input, Label } from "../../../framework/elements/index.js";
import Browser from "../../../framework/browser/Browser.js";
import Logger from "../../../framework/utils/Logger.js";
import fs from 'fs';
import path from 'path';

class QAAutomationFormsPage extends BasePage{
    constructor(){
        super(new Label('//span[text()="Practice Form"]', 'Practice Form Label'), 'Form Page');
        this.practiceFormButton = new Button('//span[text()="Practice Form"]', 'Practice Form Button');
        this.studentForm = new Label('//h5[contains(text(),"Student")]', 'Student Form');
        this.firstNameInput = new Input('//input[@id="firstName"]', 'First Name Input');
        this.lastNameInput = new Input('//input[@id="lastName"]', 'Last Name Input');
        this.maleRadioInput  = new Label('//label[@for="gender-radio-1"]', 'Male Radio Input',);
        this.mobilePhoneInput = new Input('//input[@id="userNumber"]', 'Mobile Phone Input');
        this.submitButton = new Button('button#submit', 'Submit Button');
        this.successfulModal = new Label('//div[@id="example-modal-sizes-title-lg"]', 'Successfull Modal Message');
    };
    async clickOnPracticeFormButton(){
        await this.practiceFormButton.click();
    };
    async isStudentFormDisplayed(){
        return this.studentForm.state().isDisplayed();
    };
    async fillOutFirstNameInput(userName){
        await this.firstNameInput.typeText(userName);
    };
    async fillOutLastNameInput(userLastName){
        await this.lastNameInput.typeText(userLastName);
    };
    async clickOnMaleRadioInput(){
        await this.maleRadioInput.click();
    };
    async fillOutMobilePhoneInput(userMobilePhone){
        await this.mobilePhoneInput.typeText(userMobilePhone);
    };
    async clickOnSubmitButton(){
        await this.submitButton.click();
    };
    async isModalDisplayed(){
        await this.successfulModal.state().waitForDisplayed();
        return this.successfulModal.state().isDisplayed();
    };
    async takingScreenshot(){
        const base64String = await Browser.addScreenshot();
        const base64Data = base64String.replace(/^data:image\/\w+;base64,/, "");
        // Convertir a un buffer binario
        const buffer = Buffer.from(base64Data, 'base64');

        // Guardar el buffer como un archivo de imagen
        fs.writeFileSync('./tmp/imagen.png', buffer, (err) => {
            if (err) {
                console.error("Error al guardar la imagen:", err);
            } else {
                console.log("Imagen guardada exitosamente.");
            }
        });
    };
};
export default new QAAutomationFormsPage();