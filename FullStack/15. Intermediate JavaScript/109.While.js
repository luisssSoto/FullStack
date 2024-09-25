"use strict";
var count = 99;
while (count >= 0) {
    var statement = `${count} bottles of beer on the wall, ${count} bottles of beer.Take one down and pass it around, ${count-1} bottles of beer on the wall.`;
    if (count == 1){
        console.log(statement.slice(0,83)+"no more bottles of beer on the wall.")
    }
    else if (count == 0) {
        statement = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";
        console.log(statement);
    }
    else {
        console.log(statement);
    }
    count --;
};
