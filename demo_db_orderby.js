var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers ORDER BY id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});