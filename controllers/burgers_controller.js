var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){

	burger.all((data)=>{
		console.log(data);
		var hbsObject = {
			burgers: data
		};
		console.log('Root Directory Request');
		res.render("index", hbsObject);
	})
	console.log('Root Directory Request');
	// res.render("index");
})

router.put("/api/devour", function(req, res){
	var id = req.body.id;
	var dod = req.body.dod;
	console.log('id to devour '+id);
	burger.devour(dod, id, (data)=>{
		burger.all((data)=>{
			return res.json(data);
		})
	})
})

router.post("/api/delete", function(req, res){
	var id = req.body.id;
	console.log('id to delete' +id);
	burger.delete(id, (data)=>{
		burger.all((data)=>{
			return res.json(data);
		})
	})
})

router.post("/api/new", function(req, res){
	var burgerInfo = req.body;
	console.log('adding burger' +burgerInfo.name);
	burger.new(burgerInfo, (data)=>{
		burger.all((data)=>{
			return res.json(data);
		})
	})
})

module.exports = router;