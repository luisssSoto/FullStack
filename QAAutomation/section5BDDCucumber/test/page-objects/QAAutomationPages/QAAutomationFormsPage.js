import BasePage from "../../../framework/page/BasePage.js";
import { Button, Checkbox, Input, Label } from "../../../framework/elements/index.js";

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
};
export default new QAAutomationFormsPage();