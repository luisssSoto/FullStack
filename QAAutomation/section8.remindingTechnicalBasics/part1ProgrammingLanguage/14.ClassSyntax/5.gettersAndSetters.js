"use strict";
//Getters and Setters

class Job {
    #nameOfJob;

    constructor(nameOfJob) {
        this.#nameOfJob = nameOfJob;
    };

    get() {
        return this.#nameOfJob;       
    };

    set(nameOfJob) {
        this.#nameOfJob = nameOfJob;
    };
};

const job1 = new Job('Manual Tester');
console.log(job1.get());
job1.set('QA Automation Engineer');
console.log(job1.get());