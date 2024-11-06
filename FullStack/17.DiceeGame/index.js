"use strict";
//Creating a random number between 1 to 6
var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

//Setting up DOM in order to change each dice to last random number
var dice1 = document.getElementsByClassName("img1")[0];
dice1.setAttribute("src", `images/dice${randomNumber1}.png`);

// Repeat both above steps
var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);

var dice2 = document.querySelector("img.img2");
dice2.setAttribute("src", `images/dice${randomNumber2}.png`);

//Select a winner and set up the h1 by work around DOM
var homeTitle = document.getElementsByTagName("h1")[0];
if(randomNumber1 > randomNumber2){
    homeTitle.innerText = "🥇Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
    homeTitle.innerText = "🥇Player 2 wins!";
}
else{
    homeTitle.innerText = "Draw!";
};