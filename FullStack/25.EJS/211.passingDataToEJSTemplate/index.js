import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", 
  );
});

app.post("/submit", (req, res) => {
  let userName = req.body.fName.length;
  let lastName = req.body.lName.length;
  let totalCharacters = (userName + lastName);
  res.render('index.ejs', { numCharacters: totalCharacters }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
