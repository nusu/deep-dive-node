var util = require('util');

function Person() {
	this.firstname = "Nusu";
	this.lastname = "Alabuğa";
}

Person.prototype.greet = function() {
	console.log('Hello '+ this.firstname + ' ' + this.lastname);
}

function Policeman() {
	// Person.call(this);
	this.badgenumber = '333';
}

// 
// Person'ı Policeman'ın prototype chainine ekle
// 
util.inherits(Policeman, Person);

// 
// Çıktı:
// Hello undefined undefined
// 
// neden?
// yukarıda new Policeman ile Policeman Constructorını invoke ettik line:12,
// bu constructor "new" keywordu sayesinde object olduğu için
// ve new keywordu boş bir object yarattığı için
// constructor çalışana kadar herşey undefined olur,
// ve biz constructor olarak Policeman'ı çağırdık, Person'u çalıştıramadık
// bu yüzden onlar chaine dahil olamadı
// ama Prototype'ı çağırabilirim çünkü util.inherits sadece prototypeları chaine alır
//  
// nasıl çözerim?
// new keywordü ile this boş bi object olduğu için, bizim bu boş objecti
// mutate etmesi için Person Constructorınıda yollamamız gerekir
// bunuda Person.call(this); ile yapabiliriz
// 


var officer = new Policeman();
officer.greet();