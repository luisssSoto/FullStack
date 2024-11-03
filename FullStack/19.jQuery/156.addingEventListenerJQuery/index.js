"use strict";
//Vanilla JavaScript
document.querySelector("h1").addEventListener("click", function() {
    document.querySelector("h1").style.color = "purple";
});
for(let i = 0; i < 1; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.fontSize = "20px";
    });
};

//JQuery
$("h1").click(function() {
    $("h1").css("color", "blue");
});

$("button").click(function(event) {
    $("h1").css("textAlign", "center");
});

$("input").keypress(function(event){
    console.log(event.key);
});

//it could be document or "body"
// $(document).keypress(function(event) {
//     console.log(`The key press was: ${event.key}`);
// });

//challenge
$("input").keypress(function(event) {
    $("h1").text(event.key);
});

//more challenging
// $("input").keypress(function(event) {
//     $("h1").text($("h1").text() + event.key);
// });

//add Event Listener easier
$("h1").on("mouseover", function() {
    $("h1").css("color", "yellow");
});