"use strict";
//Populating an Array

const mexicanNurses = [];
mexicanNurses[0] = 'Chivis';
mexicanNurses[2] = 'Marthita';
console.log(mexicanNurses);

//length 
mexicanNurses.length = 0;
console.log(mexicanNurses);
console.log(mexicanNurses.length);

//iterating over arrays
const colors = ['green', 'white', 'red'];

//for loop
for(let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
};

//forEach
colors.forEach((color) => {
    console.log(`color: ${color}`);
});

//for in it's not recommended, because it's more complicated to
//get the values, for in is for the indexes
for(const j in colors) {
    console.log(colors[j]);
};