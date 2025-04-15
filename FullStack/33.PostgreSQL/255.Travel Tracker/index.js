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
  country_code_list = []; 
  let result = await db.query("SELECT country_code FROM visited_countries");
  result.rows.forEach(country => {
    country_code_list.push(country.country_code);
  });
  total_countries = country_code_list.length;
  console.log(`Country Code List: ${country_code_list}`);
  res.render("index.ejs", {
    countries: country_code_list,
    total_countries: total_countries
  });
  // db.end();
});

app.post("/add", async (req, res) => {
  console.log(`req.body.country: ${req.body.country}`);
  const correctSintaxQuery = title(req.body.country);
  console.log(`correct sintax query: ${correctSintaxQuery}`);
  let new_country = await db.query("SELECT country_code FROM countries WHERE country_name = ($1)", [correctSintaxQuery]);
  console.log(`New Country: ${JSON.stringify(new_country.rows)}`);
  db.query("INSERT INTO visited_countries (country_code) VALUES ($1)",
    [new_country.rows[0].country_code]
  );
  res.redirect("/");
});

let title = (str) => {
  str = str.trimStart();
  str = str.trimEnd();
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
      if (str[i - 1] === ' ' || i === 0) {
          newStr += str[i].toLocaleUpperCase();
      } else {
          newStr += str[i].toLocaleLowerCase();
      };
  };
  return newStr;
};

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
