var express = require('express');

var lib = require('../lib/lib');

var router = express.Router();

/* GET home page. */
router.get('/', lib.insertToCollection);

module.exports = router;
