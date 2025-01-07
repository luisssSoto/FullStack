"use strict";

const pokemon = {
    name: 'charmander',
    type: 'fire',
    attack: ['tail fire', 'volcanoe head']
};

console.log(pokemon);

let charmanderSerialized = JSON.stringify(pokemon);
console.log(charmanderSerialized);
console.log(typeof charmanderSerialized);


//deserialized
let deserializedCharmander = JSON.parse(charmanderSerialized);
console.log(deserializedCharmander);
console.log(typeof deserializedCharmander);
console.log(Object.getOwnPropertyDescriptors(deserializedCharmander));