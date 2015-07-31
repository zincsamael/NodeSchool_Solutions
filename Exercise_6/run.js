var filter = require('./program');

function callback(err, data) {
	if (err) {
		return
	}
	data.forEach(function (item) {
		console.log(item)
	})
}

filter(process.argv[2], process.argv[3], callback)

