"use strict";
//Weak Map

const privates = new WeakMap();

export function Public() {
    const classifiedInformation = {
        user: 'John Doe',
        password: 'qwerty'
    };
    privates.set(this, classifiedInformation);
};

Public.prototype.method = function() {
    const me = privates.get(this);
    console.log(`I can see the classified data:
        user: ${me.user}
        password: ${me.password}`);
};

console.log(Public.prototype.constructor);
//The next line below, won't work you need to delete the .user and .password on 17, 18 lines
// Public.prototype.method();
console.log(Object.getOwnPropertyDescriptors(Public.prototype));  
