var drumButtons = document.getElementsByClassName("drum");
console.log(drumButtons);
for (let i = 0; i < drumButtons.length; i++) {
    const element = drumButtons[i];
    element.addEventListener("click", function() {
        this.style.color = "white";
        if(i < 4){
            var audio = new Audio(`./sounds/tom-${i+1}.mp3`);
        }
        else if(i === 4) {
            var audio = new Audio("sounds/snare.mp3");
        }
        else if(i === 5){
            var audio = new Audio("sounds/crash.mp3");
        }
        else {
            var audio = new Audio("sounds/kick-bass.mp3");
        };
        audio.play();
    });
};