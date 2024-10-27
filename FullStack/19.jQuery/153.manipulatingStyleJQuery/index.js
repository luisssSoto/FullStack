//show the value of any attribute
// This method has most hierarchy than define classes
var titleColor = $("h1").css("color");
console.log(titleColor);

//changing style with .css
titleColor = $("h1").css("color", "blue");
console.log(titleColor.css("color"));

//removing the color
//titleColor.css("color", "");    

//adding class
titleColor.addClass("big-title");

//adding multiple classes
titleColor.addClass("margin-50 unique-font");

//remove class
//titleColor.removeClass("big-title")

// hasClass
console.log(`Title has this class ${titleColor.hasClass("margin-50")}`);
console.log(`Title has this class ${titleColor.hasClass("unique-font")}`);

var btns = $("button");
for(let i = 0; i < btns.length; i++){
    if(btns[i].innerText === "Add margin"){
        console.log(btns[i].innerText);
        console.log(btns[i]);
        btns[i].addEventListener("click", function(){
            titleColor.addClass("adding-margin");
        });
    };
};