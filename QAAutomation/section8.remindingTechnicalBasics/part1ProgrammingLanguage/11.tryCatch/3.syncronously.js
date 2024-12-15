"use strict";
//Works Synchronously

// try {
//     setTimeout(function() {
//         noSuchVariable;
//     }, 1000);
// } catch (error) {
//     console.log('The error couldn\'t be caught');
// };

//You must handle it inside the function

setTimeout(function () {
    try {
        noSuchVariable;
    } catch (error) {
        console.log('It was an error');
        console.log(error);
    };
}, 1000);

console.log('Workflow continues');

setTimeout(() => {
    console.log('Workflow continues');
}, 1000);