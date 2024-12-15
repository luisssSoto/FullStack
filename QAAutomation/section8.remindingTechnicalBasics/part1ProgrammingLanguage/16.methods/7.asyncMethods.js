"use strict";
//Async Method

let h = "hello";

const obj = {
    f: async function() {
        await h;
    }
};

//Shorter sintax
const obj1 = {
    async f() {
        await h
    }
};