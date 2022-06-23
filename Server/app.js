const mysql = require("mysql");

const db = mysql.createConnection({
  host: "database-1.cdtdvqmpa2dv.eu-north-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "password",
  database: "my_db",
});

db.connect((err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("database connected!");
});
