"use strict";
//Calling Static Methods From Non Static Methods and Constructor

class ParentClass {
    static property = 'Static Property';
    static staticMethod() {
        console.log(`static property: ${this.property} from staticMethod`);
    };

    static anotherStaticMethod() {
        this.staticMethod();
        console.log(`called from another static method`);
    };

    constructor() {
        ParentClass.staticMethod();
        this.constructor.property;
    };
};

ParentClass.staticMethod();
ParentClass.anotherStaticMethod();
