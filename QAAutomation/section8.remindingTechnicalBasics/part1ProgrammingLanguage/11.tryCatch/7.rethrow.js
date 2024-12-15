"use strict";
//rethrow

function catchingFromOutside () {
    try {
        letIsMissing = '';
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.log('There is a syntax error');
        } else {
            console.log(error.name);
            throw error;
        };
    };
};

console.log('program start');

try {
    console.log('External catch');
    catchingFromOutside();
} catch (error) {
    console.log(error.name);
    console.log('External try-catch can handle the error');
};