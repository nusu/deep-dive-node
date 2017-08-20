function Greetr(){
	this.greeting = "Hello from greet3";
	this.greet = function(){
		console.log(this.greeting);
	}
}

Greetr.prototype.greetPrototype = function(){
	console.log("Hello from greet3 Prototype Function");
}

// 
// Yanlış Kullanım 
// 
// neden?
// çünkü this'i ve prototypeı kullanmak için constructor function olması gerekir
// ve bu "new" sayesinde olur
// 
// module.exports = Greetr();
// 



// Doğru Kullanım 
// 
// neden, yukarıdaki olmuyorda bu oluyor?
// çünkü yukarıda fonksiyonu çalıştıyıoruz, ama burada çalıştırmayıp döndürüyoruz,
// ve çağırdığımız yerde constructor function haline getiriyoruz
//
// module.exports = Greetr;
//
// var greet = require('greetr');
// var oneGreet = new greet();
// 
// 



// 
// Doğru Kullanım
// 
// neden?
// "new" sayesidne Greetr fonksiyonunun içindeki default
// olarak gelen thisi ve diğer fonksiyonları yok sayabilir
// ve bizde yenilerini ekleyebiliriz
// ama default olarak yeni şeyler ekleyemiyoruz
// 
// mantık?
// basitçe "new", Greetr'ı bir object içine alıyor, bu sayede this
// ve prototype kullanılabiliyor
// 

module.exports = new Greetr();