const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "secret",
});

app.post("/submit", (req, res) => {
  const message = req.body.message;

  db.query(
    "INSERT INTO message (message) VALUES(?)",
    [message],
    (err, result) => {
      if (result) {
        res.send(result);
      } else {
        res.send(err);
      }
    }
  );
});

app.listen(3001, console.log("3001 port deer aslaa"));
