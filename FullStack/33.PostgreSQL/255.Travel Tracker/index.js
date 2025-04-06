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


app.get("/", async (req, res) => { 
  let result = await db.query("SELECT country_code FROM visited_countries");
  result.rows.forEach(country => {
    country_code_list.push(country.country_code);
  });
  res.render("index.ejs", {
    // country_code_list.push(result.rows[0].country_code);
    countries: country_code_list,
    total_countries: total_countries
  });
  // db.end();
});

app.post("/add", async (req, res) => {
  console.log(`req.body.country: ${req.body.country}`);
  let new_country = await db.query("SELECT country_code FROM countries WHERE country_name = ($1)", [req.body.country]);
  console.log(`New Country: ${JSON.stringify(new_country.rows)}`);
  db.query("INSERT INTO visited_countries (country_code) VALUES ($1)",
    [new_country.rows[0].country_code]
  );
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
