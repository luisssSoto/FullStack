"use strict";

//1. npm init to create a new node.js project (it will create a package.json)

//2. set all the fields which will appear in REPL (if you want to set all of yes you can type: npm init -y)

//3. then install packages you want -> npm i nameOfPackage

//4. then node_modules directory will be created with the specified package

//5. go to documentation to learn how to use that package
// in this case will be sillyname package

//6. There are two ways to import a package
//a) CJS -> Common JavaScript

// var generateName = require('sillyname');
import generateName from 'sillyname';
var sillyName = generateName();
console.log(`Hi I am: ${sillyName}`);

//b) ESM -> ECMAScript Modules
// if you want to chose this one you have to set the package.json adding a 'type': 'modules' value
//Note: All of this was to centralize one sintax for both sides: front-end and back-end
// So that node.js is available now to type according the ECMAScript modules

import {randomSuperhero} from 'superheroes';
import superheroes from 'superheroes';

console.log(superheroes[50]);
console.log(`I am ${randomSuperhero()}`);