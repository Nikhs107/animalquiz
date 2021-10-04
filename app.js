var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});

var port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

let users = [];

const { Client } = require("pg");
const client = new Client({
  user: "ilkacclcivctpb",
  password: "109b997a68f6f82b048400724f739bedd2901db97375a6b129bacc5399db7f6d",
  database: "db0g8af0r9beca",
  port: 5432,
  host: "ec2-52-207-47-210.compute-1.amazonaws.com",
  ssl: { rejectUnauthorized: false },
});
client.connect(function (res, error) {
  console.log(`Connected!!!`);
});

app.post("/register", function (req, res) {
  const name = req.body.name;
  users.unshift(name);
  res.send(name);
});

app.post("/details", function (req, res, next) {
  var values = Object.values(req.body);
  console.log(values);
  const query = `INSERT INTO quizdetails (name,wronganswer,attempt,date,time) VALUES ($1,$2,$3,$4,$5)`;
  client.query(query, values, function (err, result) {
    if (err) {
      res.status(400).send(err);
    }
    res.send(`Insertion successful`);
  });
});
