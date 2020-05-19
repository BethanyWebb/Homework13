var mysql = require("mysql");


  if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    var connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "Wacwsc14!",
      database: "burgers_db"
    });
  }
  
  // Connect to the database
  connection.connect();
  
module.exports = connection;
