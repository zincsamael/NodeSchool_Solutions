var result = 0;

for (var i in process.argv) {
	var item = process.argv[i]
	if (i>1) {
		item = Number(item)
		result += item;
	}
}

console.log(result)