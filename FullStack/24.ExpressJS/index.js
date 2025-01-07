"use strict";
import express from 'express';

const app = express();
const port = 3000;

//HTTP Requests
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`App is listening in ${port}`);
});