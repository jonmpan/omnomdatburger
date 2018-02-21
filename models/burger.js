var orm = require('../config/orm.js');

var burger = {
	all: function(cb){
		orm.all("burgers", function(res){
			cb(res);
		})
	},
	delete: function(id, cb){
		orm.delete("burgers", id, function(res){
			cb(res);
		})
	},
	devour: function(dod, id, cb){
		orm.devour("burgers", dod, id, function(res){
			cb(res);
		})
	},
	new: function(burgerInfo, cb){
		console.log(burgerInfo);
		orm.new("burgers", burgerInfo, function(res){
			cb(res);
		})
	}
}

module.exports = burger;