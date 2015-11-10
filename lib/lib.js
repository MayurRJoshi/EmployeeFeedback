var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var uri = 'mongodb://tesco:tesco123@ds033484.mongolab.com:33484/employee_feedback';

var lib = {
	connectToDatabase : function(req , res , next){
		var mood = req.query.mood;
		if(mood === 'happy' || mood === 'sad' || mood === 'angry'){
			var db = MongoClient.connect(uri , function(err , db){
				if(err){
					res.send('failed');
				}
				else{
					res.send('connected');
				}
			}); 
		}
	}
};

module.exports = lib;