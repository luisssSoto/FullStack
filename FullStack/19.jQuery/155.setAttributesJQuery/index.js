"use strict";
// JQuery and Text
//vanilla JS
//getting
console.log(document.querySelector("img").getAttribute("src"));
console.log(document.querySelector("a").getAttribute("href"));

//setting
var buttons = document.querySelectorAll("button");
var firstButton = buttons[0];
firstButton.addEventListener("click", function(event){
    document.querySelector("img").setAttribute("src", "./realBoys.png");
});

//JQuery
//getting
console.log($("img").attr("src"));
console.log($("a").attr("href"));

//setting
var buttonsQuery = $("button");
var secondButtonQuery = buttonsQuery[1]
secondButtonQuery.addEventListener("click", function(event) {
    $("h1").attr("class", "big-title");
    $("h1").text("The Boys");
});
$("a").attr("href", "https://www.yahoo.com");
console.log("What is the main title class:" + $("h1").attr("class"));