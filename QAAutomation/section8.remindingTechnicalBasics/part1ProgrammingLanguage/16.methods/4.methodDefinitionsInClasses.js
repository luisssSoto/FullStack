"use strict";
//Method Definitios in Classes

class BaseClass {
    property = 'Parent';

    showProperty() {
        return this.property
    };
};

class ChildClass extends BaseClass {
    propertyChild = 'Child';

    showChildProperty() {
        console.log(super.showProperty());
        return this.propertyChild;
    };
};

const child1 = new ChildClass();
console.log(child1.showChildProperty());