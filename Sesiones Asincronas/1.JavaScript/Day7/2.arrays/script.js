"use strict";
let family = ['Alex', 'Poulette', 'Samuel', 'Leonel'];

console.log(family[0]);

console.log(family.length);

console.log(family.indexOf('Poulette'));

let lastMember = family.pop();
console.log(family, lastMember);

family.push(lastMember);
console.log(family);

let firstMember = family.shift();
console.log(firstMember);
console.log(family);

family.unshift(firstMember);

console.log(family);

family.forEach(function(member){console.log('member: ' + member)});
family.forEach(function(member, index){console.log(index + ':' + member)});

let newFamily = family.splice(1, 2);
console.log(newFamily);