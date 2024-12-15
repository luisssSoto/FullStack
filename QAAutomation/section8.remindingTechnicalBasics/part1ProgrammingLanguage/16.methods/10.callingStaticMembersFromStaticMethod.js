"use strict";
//Calling static elements from static methods

class ParentClass {
    static property = 'Static Property';
    static staticMetod() {
        console.log(`static property: ${this.property} from staticMethod`);
    };

    static anotherStaticMethod() {
        this.staticMetod();
        console.log(`called from another static method`);
    };
};

ParentClass.staticMetod();
ParentClass.anotherStaticMethod();