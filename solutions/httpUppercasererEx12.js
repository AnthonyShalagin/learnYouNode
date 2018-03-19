var http = require("http"),
	fs   = require("fs"),
	port = process.argv[2],
	path = process.argv[3];

var server = http.createServer(function(request, response) {
	var stream = fs.createReadStream(path);
	stream.pipe(response);
}).listen(port);
