var express = require('express');

var assert = require('assert');

var lib = require('../lib/lib');

var collection;
var router = express.Router();

/* GET home page. */
router.get('/', lib.connectToDatabase);

module.exports = router;
