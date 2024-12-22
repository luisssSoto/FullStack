"use strict";
//read method

import fs from 'fs';
fs.readFile('example.tx', 'utf8', (error, data) => {
    if (error) {
        console.log(error.name);
    } else {
        console.log(data);
    };
});