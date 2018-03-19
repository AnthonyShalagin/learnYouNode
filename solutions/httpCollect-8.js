var url = process.argv[2];
var http = require('http');

var result = [];

http.get(url, function(response) {

	response.setEncoding('utf8');

	response.on('data', function(input) {
		result.push(input);
	});

	response.on('end', function() {
		console.log(result.join('').length);
		console.log(result.join(''));
	});

	response.on('error', console.error);
});
