var mongodb = require('mongodb');
var console = process.console;
var MongoClient = mongodb.MongoClient;

var uri = 'mongodb://tesco:tesco123@ds033484.mongolab.com:33484/employee_feedback';
var collectionName = 'employee_mood';

var database;
var collection;

var lib = {
	connectToDatabaseCollection : function(req , res , next){
			MongoClient.connect(uri , function(err , db){
				if(err){
					throw err;
				}
				else{
					database = db;
					collection = database.collection(collectionName);
				}
			})
	},

	insertToCollection : function(req , res , next){
		var date = new Date();
		var istDate = new Date(date.getTime() + 330 * 60000);
		var mood = req.query.mood;
		if(mood === 'happy' || mood === 'sad' || mood === 'angry'){
			collection.insert({'timestamp' : istDate , 'mood' : mood} , function(err , records){
				if(err){
					res.status(404).send('Could not insert');
				}
				else{
					console.tag('Database').log('Inserted to collection');
					res.status(200).send('Done');
				}
			})
		}
		else{
			res.status(404).send('Incorrect query');
		}
	},

	ping : function(req , res , next){
		res.status(200).send('Pinged');
	}
}
module.exports = lib;