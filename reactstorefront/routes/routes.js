
var path = require("path");
var db = require("../models");
var Store = require("../models/Store.js")
// var passport = require("../server/passport");


module.exports = function(app){

	app.get("/api/login", function(req, res){
		// console.log(res);
		// console.log('hit')
		// res.json({tst: 'hi'})
		// res.sendFile(path.join(__dirname, "../public/login.html"));
		  db.Store.findAll({
		    }).then(function(dbPost) {
		    	// console.log(dbPost)
		      res.json(dbPost);
		    });
	});

}

