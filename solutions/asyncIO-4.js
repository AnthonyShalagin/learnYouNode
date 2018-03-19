var fs = require("fs");

fs.readFile(process.argv[2], "utf8", function doneReading(err, fileContents) {
	var lines = fileContents.split("\n");
	var lineNums = lines.length-1;
	console.log(lineNums);
});
