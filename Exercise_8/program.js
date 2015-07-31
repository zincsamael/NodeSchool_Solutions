var http = require('http')

// var string = "";

// http.get(process.argv[2], function (res) {
// 	res.setEncoding('utf8');

// 	res.on('data', function (data) {
// 		string += data
// 	});

// 	res.on('error', function (error) {
// 		console.error(error);
// 	});

// 	res.on('end', function (end) {
// 		console.log(string.length);
// 		console.log(string);

// 	})
// });

var bl = require('bl')

var string = "";
http.get(process.argv[2], function (res) {
	res.pipe(bl( function (err, data) {
		// body...
		string += data.toString();
	}))

	res.on('end', function (end) {
		// body...
		console.log(string.length);
		console.log(string);
	})
});