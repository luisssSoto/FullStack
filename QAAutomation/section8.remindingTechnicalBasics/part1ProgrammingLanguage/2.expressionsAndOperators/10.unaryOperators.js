"use strict";
//Unary Operators

//delete
let developer = {
    name: "Gustavo",
    programmingLanguages: "JavaScript",
    languages: "English, Spanish"
}
console.log(developer.programmingLanguages);
delete developer.programmingLanguages;
console.log(developer.programmingLanguages);

let skills = ['Docker', 'Jenkins', 'Git'];
delete skills[2];
console.log(skills);
console.log(skills.length)

//typeof

let n = null;
console.log(typeof n);
console.log(typeof true);