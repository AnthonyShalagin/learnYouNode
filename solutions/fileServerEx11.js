var http = require("http");
var fs = require("fs");
var server = http.createServer(function (req, res) {
	var readStream = fs.createReadStream(process.argv[3]);
	readStream.pipe(res);
});
server.listen(process.argv[2]);

// The pipe() function reads data from a readable stream as it becomes available and writes it to a destination writable stream.
