
var async = require('async');
var http = require('http');

var listURL = process.argv.slice(2);
var result = [];

function readFromURL(url, callback) {
	var string = "";
	http.get(url, function (res) {
		res.setEncoding('utf8');
		res.on('data', function (data){
			string += data;
		});
		res.on('end', function (end) {
			result[url] = string;
			return callback();
		});
	});
}

function handleData() {
	listURL.forEach(function (item) {
		console.log(result[item]);
	});
}

async.each(listURL, readFromURL, function (error, contents) {
	handleData();
});