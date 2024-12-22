"use strict";
//Array length

let pirates = ['Luffy', 'Namy', 'Zoro'];
console.log(pirates.length);

//adding new properties
pirates[5] = 'Usop';
console.log(pirates.length);
console.log(pirates);
console.log(Object.keys(pirates));

//setting the length.. empy items = undefined
pirates.length = 10;
console.log(Object.keys(pirates));
console.log(pirates[-1]);

//decreasing length will delete properties
pirates.length = 3;
console.log(pirates.length);
console.log(pirates);