'use strict';

// 
// ES6 version of app.js
// 

// 
// Çoğu programlama dillerine kıyasla javascriptteki 
// classların bunlarla benzer bi yönü yoktur
// javascriptteki classlar sadece Syntactic Sugardır
// bi constructor fonksiyonu eklenir
// ve geriye eklenen bütün fonksiyonlar prototypedır
// 

class Person {
	// 
	// Constructor Function, Invoke by default
	// 
	constructor(firstName, lastName) {
		this.firstName = firstName; 
		this.lastName = lastName; 
	}

	// 
	// Prototype Chain
	// Any other functions would be added into prototype chain
	// 

	greet() {
		console.log("Hi my savior, " + this.firstName + " " + this.lastName );
	}

}

var nusu = new Person("Nusu", "Alabuğa");

nusu.greet();