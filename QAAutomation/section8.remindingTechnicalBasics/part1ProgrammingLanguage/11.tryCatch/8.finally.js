"use strict";
//finally

try {
    console.log('It is ok');
    commentThisLine; //doing this to know the different behaviour
} catch (error) {
    console.log('It is not ok')
} finally {
    console.log('I will be executed all the time');
};

//return and finally

let result = (n1, n2) => {
    try {
        return n1 + n2;
    } catch {
        console.log('Something did not work');
    } finally {
        console.log('finally');
    };
};

console.log(result(5, 9));

