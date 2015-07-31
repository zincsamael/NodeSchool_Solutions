var http = require("http")

http.get(process.argv[2], function (r) {
	r.setEncoding('utf8');
	r.on('error', function(error) {
		console.error(error);
	});
	r.on('data', function (data) {
		console.log(data);
	});
});
