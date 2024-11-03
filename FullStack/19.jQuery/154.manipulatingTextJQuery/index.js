"use strict";
// JQuery and Text

// vanilla js
// innerText
var vanilla = document.querySelector("h1").innerText = "Vanilla JS";
//innerHTML
var buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.innerHTML = "<p>paragraph</>";
});

//JQuery
//text
$("h1").text(vanilla + ' JQuery');

//html content
$("button").html(`<strong>${buttons[0].textContent}</strong>`);