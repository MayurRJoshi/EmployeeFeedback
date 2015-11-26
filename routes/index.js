var express = require('express');

var lib = require('../lib/lib');

var router = express.Router();

/* GET home page. */
router.get('/', lib.insertToCollection);
router.get('/ping' , lib.ping);
router.all('*' , function(req , res , next){
	res.status(404).send('error');
});

module.exports = router;
