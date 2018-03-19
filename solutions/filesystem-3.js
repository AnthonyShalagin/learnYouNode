/*Asynchronous way*/
var fs = require("fs");

/*Synchronous way*/
var contents = fs.readFileSync(process.argv[2]);
var str = contents.toString();
var lines = str.split("\n");

console.log(lines.length-1);

