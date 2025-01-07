"use strict";
//deserialization

import fs from 'fs';
import path from 'node:path';

let currentPath = path.resolve('./object.json');
let rawData = fs.readFileSync(currentPath);
let jsonData = JSON.parse(rawData);

console.log(jsonData);
console.log(typeof jsonData);
console.log();

//deserialization
let stringData = '{"name":"John","age":25,"city":"New York"}';
let jsonObject = JSON.parse(stringData);
console.log(jsonObject);
console.log(typeof jsonObject);
console.log(jsonObject.name);