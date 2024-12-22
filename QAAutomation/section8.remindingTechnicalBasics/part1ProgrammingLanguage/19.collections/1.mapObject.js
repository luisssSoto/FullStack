"use strict";
//Map Object

const soundsAnimal = new Map();

//setting
soundsAnimal.set('dog', 'guau');
soundsAnimal.set('cat', 'miau');
soundsAnimal.set('cow', 'muuu');
soundsAnimal.set('little chiken', 'piu');

//getting
console.log(soundsAnimal);
console.log(soundsAnimal.get('dog'));

//has
console.log(soundsAnimal.has('dog'));

//delete
soundsAnimal.delete('cat');
console.log(soundsAnimal);

//iterate in it
for(const [key, value] of soundsAnimal) {
    console.log(`${key}: ${value}`);
}
//Map or object
/*
*Use maps over objects when keys are unknown until run time, and 
when all keys are the same type and all values are the same type.
*Use maps if there is a need to store primitive values as keys 
because object treats each key as a string whether it's a number 
value, boolean value or any other primitive value.
*Use objects when there is logic that operates on individual 
elements. 
*/