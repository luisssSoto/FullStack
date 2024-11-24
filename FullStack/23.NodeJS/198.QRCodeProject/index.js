"use strict";

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

// 1. Use the inquirer npm package to get user input.
inquirer
.prompt([
    {
        type: 'input',
        name: 'url',
        message: "What's your url?",
    }
])
.then((answers) => {
    let url = answers.url
    
    // 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
    var qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('yourUrlQR.png'));
    
    // 3. Create a txt file to save the user input using the native fs node module.
    fs.writeFile('userUrl.txt', url, (err) => {
        if(err) throw err;
        console.log("The file was created");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log("Something else went wrong");
    }
  });
  