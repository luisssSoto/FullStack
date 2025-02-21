"use strict";
import express from 'express';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

var phrase = ''
function weekenOrWeekday(req, res, next) {
    let today = new Date();
    today = today.getDay();
    if (today >= 1 && today <=5) {
        phrase = " a weekday it's time to work";
    } else {
        phrase = " the weekend it's time to have fun!"
    };
    next();
};

app.use(weekenOrWeekday)

app.get('/', (req, res) => {
    res.render(__dirname + '/views/index.ejs',
        {day: phrase}
    );
});

app.listen(port, () => {
    console.log(`App listening in the ${port} number`);
});