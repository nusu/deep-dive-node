var EventEmitter = require('events');
var util		 = require('util');

function Greetr(){
	this.greeting = 'Hello World';
}

// 
// Greetr Fonksiyonunun prototype chainine EventEmitter'ı
// ekle ki eventEmitter'ın fonksiyonlarına Greetr üzerinden erişebileyim
// 
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ": " + data);
	
	// 
	// util.inherits ile EventEmitter'ı Greetr'ın
	// Prototype Chaini içine aldığımız için
	// burada EventEmitter'ın emit fonksiyonunu kullanabiliriz 
	// yanındada data'yı sok
	// 
	this.emit('greet', data);
}

var greeter1 = new Greetr();

// 
// yukarıda data'yı soktuğumuz için burada callback olarak alabilirz
// 
greeter1.on('greet', function(data){
	console.log(data + ' greeted!');
});

// data'yı gönder
greeter1.greet('Nusu');