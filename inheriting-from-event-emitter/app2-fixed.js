// 
// Fixed version of app2.js
// 
var util = require('util');

function Person() {
	this.firstname = "Nusu";
	this.lastname = "Alabuğa";
}

Person.prototype.greet = function() {
	console.log('Hello '+ this.firstname + ' ' + this.lastname);
}

function Policeman() {
	Person.call(this);
	this.badgenumber = '333';
}

// 
// Person'ı Policeman'ın prototype chainine ekle
// 
util.inherits(Policeman, Person);


var officer = new Policeman();
officer.greet();