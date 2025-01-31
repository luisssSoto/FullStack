"use strict";

import express from "express";
import bodyParser from "body-parser";
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = '';

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  console.log(`url: ${__dirname}`);
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
  console.log(req.body);
  console.log(req.body.street);
  console.log(req.body.pet);
  bandName += '<h2>' + req.body.street + req.body.pet + "😎</h2>";
  res.send('<h1>Your Band is: </h1> ' + bandName);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
