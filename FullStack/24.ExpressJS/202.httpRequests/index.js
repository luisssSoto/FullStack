"use strict";
//Node.js Server

import express from 'express';

const app = express();
const port = 3000;

//HTTP Request
app.get('/', (req, res) => {
    console.log(req.rawHeaders);
    res.send('Hello world');
});

app.get('/aboutMe', (req, res) => {
    res.send('<h1>About Me</h1><p>I am Alex Developer</p>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact</h1><p>phone number: 33-22-22-23-21</p>');
});

app.listen(port, () => {
    console.log(`App is listening in port: ${port}`);
});