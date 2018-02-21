var mysql = require("mysql");
var password = require("../../../password.js")

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: password,
	database: "burgers_db"
})

connection.connect(function(err){
	if (err) throw err;
	console.log('connected as id '+connection.threadId);
})

module.exports = connection;