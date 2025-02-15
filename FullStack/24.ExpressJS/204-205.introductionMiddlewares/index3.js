import express from "express";

const app = express();
const port = 3000;

// Note: next() function it is a must always
/* Note: Even if you can handle all the requests types (PUT, DELET, PATCH, POST)
 this is going to work 'cause middlewares execute first and then the event
 handlers*/
 
app.use(function logger (req, res, next) {
  console.log(req.rawHeaders);
  console.log('something');
  console.log(`Request method: ${req.method}`);
  console.log(`URL: ${req.url}`);
  next();
});

//After next you can execute the next block of code below to it:
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
