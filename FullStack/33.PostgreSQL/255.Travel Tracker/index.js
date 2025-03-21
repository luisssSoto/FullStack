import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "countries",
  password: "postgres",
  port: 5432
});

db.connect();

let country_code_list = [];
let total_countries = 0;


db.query("SELECT * FROM visited_countries", (err, res) => {
  if (err) {
    console.log("It was an error", err.stack);
  } else {
    console.log(res.rows);
    total_countries = res.rows.length;
    res.rows.forEach(country => {
      console.log(`code country: ${country.country_code}`);
      country_code_list.push(country.country_code);
    });
  };
  console.log(country_code_list);
  db.end();
});

app.get("/", (req, res) => {
  res.render("index.ejs", {
    countries: country_code_list,
    total: total_countries
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
