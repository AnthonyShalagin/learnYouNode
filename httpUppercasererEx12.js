/* 
  HTTP UPPERCASERER (Exercise 12 of 13)  
   
  Write an HTTP server that receives only POST requests and converts  
  incoming POST body characters to upper-case and returns it to the client.  
   
  Your server should listen on the port provided by the first argument to  
  your program.  
*/

var http = require('http'),
    fs   = require('fs'),
    port = process.argv[2],
    path = process.argv[3];

var server = http.createServer(function(request, response) {
    var stream = fs.createReadStream(path);
    stream.pipe(response);
}).listen(port);
