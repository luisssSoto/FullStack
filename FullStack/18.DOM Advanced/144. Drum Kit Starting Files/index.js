//Click
var drumButtons = document.getElementsByClassName("drum");
console.log(drumButtons);
for (let i = 0; i < drumButtons.length; i++) {
    const element = drumButtons[i];
    element.addEventListener("click", function () {
        this.style.color = "white";
        var buttonInnerText = this.innerText;
        makeSound(buttonInnerText);
    });
};

//Keydown
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
});

function makeSound(letter){
    switch (letter) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            break;
        default:
            alert(`This letter: ${letter} is not valid`);
    };
    if (audio) {
        audio.play();
    };  
};