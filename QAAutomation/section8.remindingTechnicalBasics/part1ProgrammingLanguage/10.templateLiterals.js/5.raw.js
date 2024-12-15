"use strict";
//raw

function usingRaw(strings) {
    return strings.raw[0];
};

let r = usingRaw`tab \t`;
console.log(r);