"use strict";
//deserialization

import fs from 'fs';
import path from 'node:path';

let currentPath = path.resolve('./object.json');
let rawData = fs.readFileSync(currentPath);
let jsonData = JSON.parse(rawData);

console.log(jsonData);
console.log(typeof jsonData);