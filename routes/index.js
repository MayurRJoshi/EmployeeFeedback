var express = require('express');
var mongodb = require('mongodb');
var assert = require('assert');
var MongoClient = mongodb.MongoClient;
var collection;
var router = express.Router();

var uri = 'mongodb://tesco:tesco123@ds033484.mongolab.com:33484/employee_feedback';

/* GET home page. */
router.get('/', function(req, res, next) {
	var mood = req.query.mood;
	console.log(typeof mood);

	if(mood==='happy' || mood==='sad' || mood==='angry'){
		var db = MongoClient.connect(uri , function(err , db){
  		if(err)
  			throw err;
  		console.log("Connected");
  		collection = db.collection('employee_mood');
  		var date = new Date();
  		collection.insert({'timestamp':date,'mood':mood},function(err , result){
  			if(err)
  				throw err;

  			console.log('entry saved');
  		});
  		
});
	}
  res.render('index', { title: mood });
});

module.exports = router;
