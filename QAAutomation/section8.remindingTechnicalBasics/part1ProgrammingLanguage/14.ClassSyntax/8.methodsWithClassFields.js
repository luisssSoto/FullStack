"use strict";
//Methods with class fields

class Button {
    constructor(buttonName) {
        this.buttonName = buttonName;
    };
    click1() {
        console.log(`Clicking on ${this.buttonName}`);
    }
    click2 = () => {
        console.log(`Clicking on ${this.buttonName}`);
    };
};

let button1 = new Button('Sign in');

//problem
try {
    setTimeout(button1.click, 2000);
} catch(error) {
    console.log(error.name);
};

//1.solution
setTimeout(() => {
    button1.click1()
}, 2000);

//2.solution
setTimeout(button1.click2, 2000);