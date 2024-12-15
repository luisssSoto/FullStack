"use strict";
//Break

for (let i = 5; i < 6; i--){
    console.log('Get out now!');
    break;
};

//Break labeled
labelCanceledLoops: while (true) {
    console.log('You will be here forever');
    while (true) {
        console.log('Don\'t be afraid');
        break;
    }
    console.log('Keep trying you\'re gonna out soon');
    break labelCanceledLoops;
};