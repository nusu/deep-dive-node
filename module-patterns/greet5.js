// 
// Revealing Module Pattern
// 
// Exposing only the properties and methods you want via
// an returned object
// 

var greeting = "Hello from greet5";

function greet() {
	//
	// buradayken yukarıdaki greeting variable'ını kullanabilir
	// 
	console.log(greeting);
}

// 
// ama dışarıdan çağırıldığında greet3 gibi buradaki greeting
// variableını değiştirme gibi bir şans olmayacak
// çünkü burada o variable export edilmediğinden, 
// sadece fonksiyon çalışırken modülün kendi içindeki halini alacak
// dışarıdan müdehalelere izin vermeyecek; 
// 
module.exports = {
	greet: greet
}