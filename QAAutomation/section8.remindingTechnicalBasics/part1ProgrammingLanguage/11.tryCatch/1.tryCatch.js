"use strict";
//Try Catch

try {
    console.log('Do something...');
    console.log('At least there is a runtime error');
    runtimeError;
} catch(error) { 
    console.log("it was a runtime error");
    console.log(error);
};
console.log('Workflow continues');


