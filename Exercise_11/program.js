
var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
	// request handling logic...
	res.writeHead(200, {'content-type':'text/plain'});

	fs.createReadStream(process.argv[3]).pipe(res);
});
server.listen(process.argv[2]);

