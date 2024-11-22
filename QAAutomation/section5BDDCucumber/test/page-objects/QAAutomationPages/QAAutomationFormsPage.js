import BasePage from "../../../framework/page/BasePage.js";
import { Button, Checkbox, Input, Label } from "../../../framework/elements/index.js";

class QAAutomationFormsPage extends BasePage{
    constructor(){
        super(new Label('//span[text()="Practice Form"]', 'Practice Form Label'), 'Form Page');
        this.practiceFormButton = new Button('//span[text()="Practice Form"]', 'Practice Form Button');
        this.studentForm = new Label('//h5[contains(text(),"Student")]', 'Student Form');
        this.firstNameInput = new Input('//input[@id="firstName"]', 'First Name Input');
        this.lastNameInput = new Input('//input[@id="lastName"]', 'Last Name Input');
        this.maleCheckbox = new Checkbox('//input[@id="gender-radio-1"]', 'Male Input');
        this.mobilePhoneInput = new Input('//input[@id="userNumber"]', 'Mobile Phone Input');
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
    async checkMaleInput(){
        await this.maleCheckbox.check();
    };
    async fillOutMobilePhoneInput(userMobilePhone){
        await this.mobilePhoneInput.typeText(userMobilePhone);
    };
    async isModalDisplayed(){
        return this.successfulModal.state().isDisplayed();
    };
};
export default new QAAutomationFormsPage();