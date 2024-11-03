"use strict";

//hide and show
let buttons = $("button");
console.log(buttons);
let buttonHide = buttons.eq(0);
buttonHide.click(function() {
    $("h1").hide();
});