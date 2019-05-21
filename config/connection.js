
const mysql = require("mysql");

let connection = mysql.createConnection({

        port: 3306,
        host: "localhost",
        user: "root",
        password: "Redbird7821037*",
        database: "burgers_db"

    });

connection.connect(function(err) {

    if(err) {
        console.error("Error connecting: " + err.stack);
        return;
   };

    console.log("Connected as id " + connection.threadId);

});

module.exports = connection;