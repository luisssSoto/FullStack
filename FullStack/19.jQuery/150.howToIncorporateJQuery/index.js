var buttons = document.querySelectorAll("button");
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(event) {
        document.querySelector("h1").style.color = "red";
        setTimeout(function(){
            document.querySelector("h1").style.color = "black";
        }, 500)
    });
};

//jQuery or $ it's the same
//jQuery("h1").css("color", "blue");
$("h1").css("color", "blue");
