
var path = require("path");
var db = require("../models");
var Guitar = require("../models/Guitar.js")
// var passport = require("../server/passport");


module.exports = function(app){

	app.get("/api/guitars", function(req, res){
				//this finds all guitars
		  db.Guitar.findAll({
		    }).then(function(dbPost) {
		    	// console.log(dbPost)
		      res.json(dbPost);
		    });
	});

		app.get("/api/bass", function(req, res){
				//this finds all guitars
		  db.Bass.findAll({
		    }).then(function(dbPost) {
		    	// console.log(dbPost)
		      res.json(dbPost);
		    });
	});

		app.get("/api/drums", function(req, res){
				//this finds all guitars
		  db.Drums.findAll({
		    }).then(function(dbPost) {
		    	// console.log(dbPost)
		      res.json(dbPost);
		    });
	});

}

