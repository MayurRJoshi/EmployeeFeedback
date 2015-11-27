var express = require('express');
var scribe = require('scribe-js')();
var console = process.console;
var routes = require('./routes/index');
var cron = require('./routes/cron');
var auth = require('http-auth');
var https = require('https');

var app = express();
var basic = auth.basic({
	realm : 'Scribe log webpanel',
	file : __dirname + '/users.htpasswd'
});

cron.job;

app.locals.intervalId = setInterval(ping , 1740000);
function ping(){
		https.get('https://whispering-mesa-8158.herokuapp.com/ping' , function(){
		console.tag('Ping').log('Success ');
	})
};

app.use(scribe.express.logger());
app.use('/logs' , auth.connect(basic) , scribe.webPanel());
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send();
});

module.exports = app;
