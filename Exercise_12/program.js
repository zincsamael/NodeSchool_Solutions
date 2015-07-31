var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (req, res) {
	if (req.method == 'POST') {
		req.pipe(map(function (chunk) {
			return chunk.toString().toUpperCase();
		})).pipe(res);
	}
});

console.log(process.argv);
server.listen(process.argv[2]);