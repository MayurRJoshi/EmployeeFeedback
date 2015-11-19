var express = require('express');
var scribe = require('scribe-js')();
var routes = require('./routes/index');

var app = express();

app.use(scribe.express.logger());
app.use('/logs' , scribe.webPanel());
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
