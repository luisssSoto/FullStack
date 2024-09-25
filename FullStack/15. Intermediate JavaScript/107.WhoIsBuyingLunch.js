"use strict";

var guessList = ["Pablo", "Pablito", "Brenda", "Dad", "Mom"];

function whosPaying(names) {
    var index = Math.random()*names.length
    index = Math.floor(index)
    var selectedPerson = names[index];
    var decision = selectedPerson + " is going to buy lunch today!";
    return decision;
};

console.log(whosPaying(guessList));