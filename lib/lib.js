var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var uri = 'mongodb://tesco:tesco123@ds033484.mongolab.com:33484/employee_feedback';
var collectionName = 'employee_mood';

var lib = {
	connectToDatabase : function(req , res , next){
		var mood = req.query.mood;

		if(mood === 'happy' || mood === 'sad' || mood === 'angry'){
			var db = MongoClient.connect(uri , function(err , db){
				if(err){
					res.status(404).send('Could not connect to database');
				}
				else{
					//res.status(200).send('Connected to database');
					res.db = db;
					next();
				}
			}); 
		}
		else{
			res.status(404).send('Incorrect query');
		}
	},

	connectToCollection : function(req , res , next){
		var db = res.db;
		var collection = db.collection(collectionName);
		res.collection = collection;
		next();
	},

	insertToCollection : function(req , res , next){
		var collection = res.collection;
		collection.insert({'timestamp' : new Date() , 'mood' : req.query.mood});
		res.status(200).send('Done');
	}
};

module.exports = lib;