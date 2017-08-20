// 
// Function Expressions
// 


function caller(fn){

	if(typeof fn === "function" ) fn();
	if(typeof fn === "string" ) console.log(fn);

}

// 
// Fonksiyonların içine fonksiyon bile sokabilirsin.
// 

caller(function(){ console.log("put a function") });

// 
// Yada normal kullanırsın, yada array atarsın
// 
caller("put a string");