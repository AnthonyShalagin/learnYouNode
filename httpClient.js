var url = process.argv[2];
var http = require('http');

http.get(url, function(req) {
	req.setEncoding("utf8");
	req.on("data", function(data) {
		console.log(data);
	});
});