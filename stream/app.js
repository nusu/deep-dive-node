// 
// Stream
// 

var fs = require('fs');

var readable = fs.createReadStream(__dirname + "/greetings.txt", 
	{
		encoding: 'utf8', 
		highWaterMark: 16 * 1024 // specify max buffer size to 16kb.
	}
);

var writable = fs.createWriteStream(__dirname + '/write.txt'); 

// 
// Bütün dosyanın okunmasını beklemeden gelen chunk
// sayesinde, okunduğu kadarı ile işlem yapabiliriz
// videolar için muazzam
// 
readable.on('data', function(chunk){
	// console.log(chunk);
	console.log(chunk.length);
	writable.write(chunk);
});