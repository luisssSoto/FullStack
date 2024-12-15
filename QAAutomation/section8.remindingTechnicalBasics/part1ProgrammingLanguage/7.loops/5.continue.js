"use strict";
//continue

for (let i = 0; i < 5; i++){
    if (i % 2 === 0) {
        continue;
    };
    console.log(i);
};

//continue labeled
let i = 0;
top: while (i < 3) {
    console.log('top');
    while (true) {
        console.log('bottom');
        i++;
        continue top;
    };
};