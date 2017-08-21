'use strict';
// 
// ES6 version of app.js
// 

var EventEmitter = require('events');
var util		 = require('util');

// 
// Classlarda inheritence
//
// normalde util.inherits, ile inheritince yapılırken classlarda
// bu:
// class Greetr extends EventEmitter
// olmalıdır
// 
// ayrıyetten normalde constructorda
// process chaine alınan eventEmitter'ın this variablelarınıda almak için
// çağırılan:
// EventEmitter.call(this);
// methodu es6 classlarında sadece
// super();
// olarak kullanılır
// 

class Greetr extends EventEmitter{

	constructor() {
		// 
		// EventEmittera empty this objectini mutate ettir
		// 
		super();

		this.greeting = 'Hello World';	
	}
	
	greet(data) {
		console.log(`${this.greeting}: ${data}`);
	
		// 
		// util.inherits ile EventEmitter'ı Greetr'ın
		// Prototype Chaini içine aldığımız için
		// burada EventEmitter'ın emit fonksiyonunu kullanabiliriz 
		// yanındada data'yı sok
		// 
		this.emit('greet', data);
	}

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