"use strict";
//Error Object

try {
    console.log(undefined.toString());
} catch (error) { 
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
};
console.log('continue');