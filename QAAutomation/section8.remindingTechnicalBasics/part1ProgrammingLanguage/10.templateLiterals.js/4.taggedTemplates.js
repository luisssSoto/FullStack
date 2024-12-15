"use strict";
//Tagged Templates

function myTag(strings, prota, anime, isForAllPublic) {
    const pro = strings[0];
    const ani = strings[1];

    let isAllowedForEveryone = `${isForAllPublic === true ? "this serie is allowed for everyone"
        : "this serie is only for > 18 years old"
    }`

    return `${pro}: ${prota} ${ani}: ${anime} ${isAllowedForEveryone}`
};
let p = 'Goku';
let a = 'Dragon Ball Z';

let myOwnTag = myTag`Protagonist ${p} Anime ${a} ${true}`;
console.log(myOwnTag);