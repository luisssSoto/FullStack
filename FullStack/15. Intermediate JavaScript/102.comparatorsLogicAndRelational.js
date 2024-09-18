"use strict";
//paste this code on the browser
prompt("What's your name: ");
prompt("What's your crush name: ");
var getAlong = Math.random()*100
getAlong = Math.floor(getAlong) + 1;
if (getAlong > 70) {
    alert("You have " + getAlong + "% to get along each other" );
}
if (getAlong > 30 && getAlong <= 70) {
    alert('Perhaps you coul be a great couple' + getAlong + "%")
}
if (getAlong <= 30) {
    alert("Don't try it because you only have " + getAlong + "% to falling in love");
}


