import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
  console.log(`url: ${__dirname}`);
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  // Note: Be careful with interpolation will be an error these below sentences:
  // console.log(`Request: ${req}`);
  // console.log(`Request Body: ${req.body}`);
  console.log(req.body);  
  console.log(req.body.street);
  console.log(req.body.pet);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
