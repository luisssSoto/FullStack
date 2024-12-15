"use strict";
//Interface 
//Note: In JavaScript, there is no built-in concept of interfaces

const myInterface = {
    method1: function() {},
    method2: function(param1, param2) {}
};

class MyClass {
    method1() {
        console.log('Waves from method 1');
    };
    method2(param1, param2) {
        console.log(`Showing ${param1} and ${param2} from method2`);
    };
};

//checking if all methods of Interface are in the class

function implementsInterface(object, myInterface) {
    for(const method in myInterface) {
        if( ! (method in object) || (typeof object[method] !== 'function')) {
            return false;
        };
    };
    return true;
};

const myObj = new MyClass();

console.log(implementsInterface(myObj, myInterface));