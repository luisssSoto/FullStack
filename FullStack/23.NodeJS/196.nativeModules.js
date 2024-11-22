"use strict";
const fs = require("fs");

fs.writeFile("196.message.txt", "Hello from NodeJs!", (err) => {
    if(err) throw err;
    console.log("The files was created");
});

fs.readFile("196.message.txt",({encoding:"utf8"}), (err, data) => {
    if(err) throw err;
    console.log(data);
});
