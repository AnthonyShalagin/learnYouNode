/*
Buffer objects are Node's way of efficiently representing arbitrary arrays  
  of data, whether it be ascii, binary or some other format. Buffer objects  
  can be converted to strings by simply calling the toString() method on  
  them. e.g. var str = buf.toString().  
*/

var fs = require('fs');

/*Asynchronous way*/

/*Synchronous way*/
var contents = fs.readFileSync(process.argv[2]);
var str = contents.toString()
var lines = str.split('\n');

console.log(lines.length-1);

