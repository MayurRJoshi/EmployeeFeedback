/* Cron jobs */

var cron = require('cron');

var CronJob = cron.CronJob;
//var lib = require('../lib/lib');
var console = process.console;
var status = true;
var time = '0 5 0 * * *';
var useTimeZone = 'Asia/Kolkata';

var job = new CronJob({
	cronTime : time,
	onTick : function(){
		var intervalId = require('../app').locals.intervalId;
		console.log('Cron tick');
		clearInterval(intervalId);
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