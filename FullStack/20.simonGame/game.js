"use strict";
let gamePattern = [];
let buttonColours = ['red', 'blue', 'green', 'yellow'];

let userClickedPattern = [];

let level = 0;

let isGameStarted = false;

$(document).keypress(function() {
    if(isGameStarted == false){
        nextSequence();
        isGameStarted = true;
    };
});

function nextSequence() {
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    let buttonSelected = $(`#${randomChosenColour}`);
    buttonSelected.fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    $("h1").text(`Level ${level}`);
    level += 1;
};

let buttons = $('div .btn').click(function(event) {
    let userChosenColour = event.currentTarget.id;

    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length -1);
});

function playSound(name){
    let sound = new Audio(`sounds/${name}.mp3`);
    sound.play();
};

function animatePress(currentColour){
    $(`div #${currentColour}`).addClass("pressed")
    setTimeout(function(){
        $(`div #${currentColour}`).removeClass("pressed");
    }, 100);
};

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if(currentLevel === gamePattern.length -1){
            setTimeout(function() {
                nextSequence();
            }, 1000);
            userClickedPattern = [];
        }
    }
    else {
        console.log("wrong");
        let wrongSound = new Audio("./sounds/wrong.mp3");
        wrongSound.play();
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over. Press any key to restart");
        startOver();
    };
};

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    isGameStarted = false;
};