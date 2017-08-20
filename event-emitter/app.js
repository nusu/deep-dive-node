// 
// Custom Event Emitter
// 
var Emitter = require('./emitter');
// Node JS Core Event Emitter
// var Emitter = require('./events');

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