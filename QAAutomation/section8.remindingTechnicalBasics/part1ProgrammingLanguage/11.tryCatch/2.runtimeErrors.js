"use strict";
//Try Catch only works with Runtime errors

//Parse-time Errors don't work with try-catch
// try {
//     {{
// } catch (error) {
//     console.log('This block of code will never execute');
// }; 

//Runtime Error does work
try {
    console.log('running...');
} catch (error) {
    console.log('Run-time error');
};
