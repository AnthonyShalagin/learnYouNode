/*
  Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Collect all data from the server (not  
  just the first "data" event) and then write two lines to the console  
  (stdout).  
   
  The first line you write should just be an integer representing the number  
  of characters received from the server. The second line should contain the  
  complete String of characters sent by the server.  

*/

// var http = require('http'),
// bl = require('bl');

// var myBL = new bl(function(err, myBL){
//     console.log(myBL.length);
//     console.log(myBL.toString());
// });

// var url = process.argv[2];
// http.get(url, function(res){
//     res.pipe(myBL);
//     res.on('end', function(){
//         myBL.end();
//     });
// });


/*
Pipe function

Use pipe to send a readable stream response and send it to a writable stream 
bl (buffer list) which can wait until the readable stream is done before proceeding. 
*/


var url = process.argv[2];
var http = require('http');

var result = [];

http.get(url, function(response) {
	
	response.setEncoding("utf8");
	
	response.on("data", function(input) {
		result.push(input);
	});
	
	response.on("end", function() {
		console.log(result.join("").length);
		console.log(result.join(""));
	});

	response.on("error", console.error);
});
