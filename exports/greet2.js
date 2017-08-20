exports.greet = function(){
	console.log("Hello from greet2");
}

// 
// Ancak burada direk exports'u değiştirmek yerine
// mutate ettiğimiz için, referans bozulmaz ve aşağıdaki
// gibi çıktı verir.
// 
// { greet: [Function] }
// { greet: [Function] }
// 

console.log(exports);
console.log(module.exports);