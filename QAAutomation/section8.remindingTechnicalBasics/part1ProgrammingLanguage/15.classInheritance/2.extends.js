"use strict";
//Class can inherits from many other entities like functions

function makingOperation(nameOperation) {
    return class {
        constructor(nameOperation) {
            this.nameOperation = nameOperation;
        };
        get() {
            console.log(nameOperation);
        };
    };
};

class Addtion extends makingOperation('Addition') {
    constructor(nameOperation, operand1, operand2) {
        super(nameOperation);
        this.operand1 = operand1;
        this.operand2 = operand2;
    };
    executeAddition() {
        return this.operand1 + this.operand2;
    };
};

let addition1 = new Addtion('addition', 3, 8);
console.log(addition1.executeAddition());
addition1.get();