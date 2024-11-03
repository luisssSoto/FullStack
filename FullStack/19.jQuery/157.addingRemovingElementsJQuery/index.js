"use strict";
// Adding Elements and remove them

// Vanilla JavaScript
//adding
let newParagraph = document.createElement('p');
newParagraph.textContent = "Brand New Paragraph";
document.querySelector("a").appendChild(newParagraph);

//remove
let buttons = document.querySelectorAll("button");
// buttons[0].remove();

//JQuery
//adding
$("h1").before("<p> Before </p>");
$("h1").prepend("<p> Pre-append </p>");-
$("h1").append("<p> Append </p>");
$("h1").after("<p> After </p>");

//remove
// $("h1").remove();