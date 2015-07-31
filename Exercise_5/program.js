// console.log(process.argv)

var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function callback(err, list) {
	list.forEach(function iter(item) {
		if (path.extname(item) == "."+process.argv[3]){
			console.log(item)
		}
	})
})