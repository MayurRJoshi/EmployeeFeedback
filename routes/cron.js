/* Cron jobs */

var cron = require('cron');

var CronJob = cron.CronJob;
//var lib = require('../lib/lib');
var console = process.console;
var time = '0 0 6 * * *';
var useTimeZone = 'Asia/Kolkata';

var job = new CronJob({
	cronTime : time,
	onTick : function(){
		console.log('Cron running ...');
		var https = require('https');
		setInterval(function (){
		https.get('https://whispering-mesa-8158.herokuapp.com/ping' , function(){
		console.tag('Ping').log('Success');
	})
} , 1200000);
	},
	onComplete : function(){
		console.log('Cron complete');
	},
	start : true,
	timeZone : useTimeZone
});

module.exports = {
	job : job 
};