"use strict";

var guessList = ["Pablo", "Pablito", "Brenda", "Dad", "Mom"];
console.log(guessList[0])
console.log(guessList.length);
console.log(guessList.includes("Pablito"))

var userName = prompt("What is your name? ");
if (guessList.includes(userName)) {
    alert("Welcome 🎉");
}
else{
    alert("Sorry maybe the next time 😫")
} 