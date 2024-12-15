"use strict";
//Encapsulation Methods

import { Person } from "./1.classesAndConstructor.js";

class QAEngineer extends Person {
    #showGitHubPortfolio(){
        const url = 'https://github.com/luisssSoto';
        return url;
    };
    
    getGitHubPortfolio() {
        console.log(`This is my portofolio: ${this.#showGitHubPortfolio()}`);
    };
};

const tester1 = new QAEngineer();
tester1.getGitHubPortfolio();

//You can't access a private property and/or method outside the class