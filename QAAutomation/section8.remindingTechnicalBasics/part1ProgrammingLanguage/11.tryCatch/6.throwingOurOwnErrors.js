"use strict";
//Throwing our own errors

let stringUser = '{ "age": 30 }';
try {
    let jsonUser = JSON.parse(stringUser);
    console.log(jsonUser);
    if (!jsonUser.name) {
        throw new SyntaxError('Your own error');
    };
} catch (error) {
    console.log('It couldn\'t complete the task');
    console.log(`name: ${error.name}`);
    console.log(`message: ${error.message}`);
};