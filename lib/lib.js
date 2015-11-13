var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var uri = 'mongodb://tesco:tesco123@ds033484.mongolab.com:33484/employee_feedback';
var collectionName = 'employee_mood';

var database;
var collection;

var lib = {
	connectToDatabaseCollection : function(req , res , next){
			MongoClient.connect(uri , function(err , db){
				if(err){
					res.status(404).send('Could not connect to database');
				}
				else{
					database = db;
					collection = database.collection(collectionName);
				}
			})
	},

	insertToCollection : function(req , res , next){
		var mood = req.query.mood;
		if(mood === 'happy' || mood === 'sad' || mood === 'angry'){
			collection.insert({'timestamp' : new Date() , 'mood' : mood} , function(err , records){
				if(err){
					res.status(404).send('Could not insert');
				}
				else{
					res.status(200).send('Done');
				}
			})
		}
		else{
			res.status(404).send('Incorrect query');
		}
	}
}
module.exports = lib;