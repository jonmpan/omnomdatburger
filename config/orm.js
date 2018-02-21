var connection = require("../config/connection.js");

var orm = {
	all: function(tableInput, cb){
		var queryString = "SELECT * FROM ?? LIMIT 100;"
		connection.query(queryString, [tableInput], (err, result)=>{
			if(err) throw err;
			cb(result);
		})
	},
	delete: function(tableInput, id, cb){
		var queryString = "DELETE FROM ?? WHERE id=?";
		connection.query(queryString, [tableInput, id], (err, result)=>{
			if(err) throw err;
			cb(result);
		})
	},
	devour: function(tableInput, dod, id, cb){
		var queryString = "UPDATE ?? SET devoured = 1, dod = ? WHERE id = ? LIMIT 100;";
		connection.query(queryString, [tableInput, dod, id], (err, result)=>{
			if(err) throw err;
			cb(result);
		})
	},
	new: function(tableInput, burgerInfo, cb){
		var queryString = "INSERT INTO ?? (name, owner, dob) VALUES (?, ?, ?);"
		connection.query(queryString, [tableInput, burgerInfo.name, burgerInfo.owner, burgerInfo.dob], (err, result)=>{
			if(err) throw err;
			cb(result);
		})
	}
}

module.exports = orm;