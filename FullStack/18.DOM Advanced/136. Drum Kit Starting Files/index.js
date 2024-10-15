var drumButtons = document.getElementsByClassName("drum");
console.log(drumButtons);
for (let i = 0; i < drumButtons.length; i++) {
    const element = drumButtons[i];
    element.addEventListener("click", function() {
        alert(`Click on ${element.getAttribute("class")}`);
    });
};