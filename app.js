const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: "password",
  database: "mydb"
});

db.connect(err => {
  if (err) {
    console.log("DB Error:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.get("/", (req, res) => {
  res.send("🚀 Node.js + MySQL running in Docker Compose");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
