"use strict";
//new function()

let user = new function() {
    this.msg = 'I only was created to be executed one time';
    console.log(this.msg);
};