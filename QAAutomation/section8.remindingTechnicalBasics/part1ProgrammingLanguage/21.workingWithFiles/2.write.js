"use strict";
// write method

import fs from 'fs';

fs.writeFile('output.txt', 'Hello World', (error) => {
    if (error) {
        console.log(error.name);
    } else {
        console.log('File was written successfully');
    };
});

