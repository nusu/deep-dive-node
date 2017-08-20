var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function() {
	console.log("selam nusu");
});

emtr.on('greet', function() {
	console.log("bana bişiler oluyor");
});

emtr.on('greet', function() {
	console.log("görüşürüz");
});

emtr.emit('greet');