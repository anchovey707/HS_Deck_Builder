var mysql = require('mysql');

var con = mysql.createConnection({
  host: "18.234.74.106:3306",
  user: "hs_user",
  password: "hearthstone"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO users (id, username, password) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });