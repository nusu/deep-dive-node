// 
// Stream Pipes
// 

var fs = require('fs');

var readable = fs.createReadStream(__dirname + "/greetings.txt");

var writable = fs.createWriteStream(__dirname + '/pipe.txt'); 

readable.pipe(writable);