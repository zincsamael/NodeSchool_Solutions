var http = require('http');
var url = require('url');


var server = http.createServer(function (req, res) {
	var request = url.parse(req.url, true);
	var req_time = new Date(request.query['iso']);
	console.log(req_time);
	if (request.pathname == '/api/parsetime'){
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.write(JSON.stringify({'hour':req_time.getHours(), 'minute':req_time.getMinutes(), 'second':req_time.getSeconds()}));
	}
	else if (request.pathname == '/api/unixtime'){
		res.writeHead(200, { 'Content-Type': 'application/json' });
		var result = JSON.stringify({'unixtime':(req_time/ 1 )});
		console.log(result);
		res.write(result);
	}
	res.end();
});
server.listen(process.argv[2]);