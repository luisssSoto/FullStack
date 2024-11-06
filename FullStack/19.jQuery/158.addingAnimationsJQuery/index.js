"use strict";

//hide
let buttons = $("button");
console.log(buttons);
let buttonHide = buttons.eq(0);
buttonHide.click(function() {
    $("h1").hide();
});

//show
let buttonShow = buttons.eq(1);
buttonShow.click(function(){
    $("h1").show();
});
buttonShow.text("Show");

//toggle (both above methods)
let buttonToggle = buttons.eq(2);
buttonToggle.click(function(){
    $("h1").toggle();
});

//fadeOut
let buttonFadeOut = buttons.eq(3);
buttonFadeOut.on("click", function() {
    $("h1").fadeOut();
});
buttonFadeOut.html("<strong>FadeOut</strong>");

//fadeIn
let buttonFadeIn = buttons.eq(4);
buttonFadeIn.on("click", function(){
    $("h1").fadeIn();
});
buttonFadeIn.text("fadeIn");    

//fadeToggle
let buttonFadeToggle = buttons.eq(5);
console.log(buttonFadeToggle);
buttonFadeToggle.on("mouseover", function() {
    $("h1").fadeToggle();
});

//slide up
let buttonSlideUp = buttons.eq(6);
buttonSlideUp.on("click", function() {
    $("h1").slideUp()
})

//slide down
let buttonSlideDown = buttons.eq(7);
buttonSlideDown.on("click", function() {
    $("h1").slideDown();
});

//slide toggle
let buttonSlideToggle = buttons.eq(8);
buttonSlideToggle.on("click", function() {
    $("h1").slideToggle();
});

//animate
let buttonAnimation = buttons.eq(9);
buttonAnimation.on("click", function(){
    $("h1").animate({opacity: 0.5})
    $("h1").animate({margin: "20%"});
});

//combine them
let combineThem = buttons.eq(10);
combineThem.text("Combine Them button");
combineThem.on("mouseover", function(){
    $("h1").fadeOut().animate({margin: "20px"}).fadeIn();
});