/*
  Write a program that uses a single asynchronous filesystem operation to  
  read a file and print the number of newlines it contains to the console  
  (stdout), similar to running cat file | wc -l.  
*/

var fs = require('fs');
var lineNums = undefined;

fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
  var lines = fileContents.split('\n');
  var lineNums = lines.length-1;    
  console.log(lineNums);
});