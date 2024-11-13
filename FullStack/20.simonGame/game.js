"use strict";
let gamePattern = [];
let buttonColours = ['red', 'blue', 'green', 'yellow'];

let userClickedPattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random()*4);

    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    let buttonSelected = $(`#${randomChosenColour}`);

    buttonSelected.fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
};

let buttons = $('div .btn').click(function(event) {
    let userChosenColour = event.currentTarget.id;

    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function playSound(name){
    let sound = new Audio(`sounds/${name}.mp3`);
    sound.play();
};

// 1. Create a new function called animatePress(), it should take a single input 
//parameter called currentColour.
function animatePress(currentColour){
    $(`div #${currentColour}`).addClass("pressed")
    setTimeout(function(event){
        $(`div #${currentColour}`).removeClass("pressed");
    }, 100);
};

// 2. Take a look inside the styles.css file, you can see there is a class called "pressed", 
//it will add a box shadow and changes the background colour to grey.
