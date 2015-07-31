console.log(process.argv);

var net = require('net')
var server = net.createServer(function (socket) {
	// body...
	var date = new Date();
	var month = ("0" + (date.getMonth()+1)).slice(-2);
	var hour = ("0" + date.getHours()).slice(-2);
	var minute = ("0" + date.getMinutes()).slice(-2);
	var string = date.getFullYear()+'-'+month+'-'+date.getDate()+' '+hour+':'+minute+'\n';
	socket.write(string);
	socket.end();
});
server.listen(process.argv[2]);