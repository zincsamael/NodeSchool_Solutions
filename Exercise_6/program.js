// console.log(process.argv)

var fs = require('fs')
var path = require('path')

module.exports = function (filePath, type, callback) {
	fs.readdir(filePath, function donereading(err, list) {
		if (err) {
			return callback(err);
		}
		var result = [];
		list.forEach(function iter(item) {
			if (path.extname(item) === "." + type){
				result.push(item);
			}
		});
		callback(null, result);
	});
}

