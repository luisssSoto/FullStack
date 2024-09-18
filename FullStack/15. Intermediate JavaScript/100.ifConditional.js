"use strict";
prompt("What's your name: ");
prompt("What's your crush name: ");
var loveScore = Math.random()*100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore > 75) {
    alert(`Your score is: ${loveScore}% congrats you love each other`)
}
else {
    alert(`Sorry but it'll never work your score is: ${loveScore}%`)
}