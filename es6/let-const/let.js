// var'ın aksine let sadece blokların içinde çalışır
// mesela şu kod bir bloktur:

// if(x > 1){
// 	let hi = "hi message";
// }

// hi sadece if'in içinden erişilebilir
// iften sonra hi'ı console.log yaptırmaya çalışırsanız hata verir

// neden ?
// sadece küçük hesaplamalar yapmak için kullanılan variableların window'a scope olmaması için.

var age = 100;

if(age > 17){
	let dogYears = age * 7;
	console.log(`You're ${dogYears} years old`);	
}

// console.log(dogYears); 
// throws an error


let points = 50;
let winner = false;

if(points > 10){
	let winner = true;
	console.log(winner);
}

console.log(winner);
// ^ false olarak gözükür çünkü let sadece blok içinde scope olur, yani if haricinde winner hala false


// ilginç:

console.log("var\n");

for(var i = 0; i < 10; i++){
	console.log(i);

	setTimeout(function(){
		console.log(`The number is ${i}`);
	})	
}

console.log("\nlet\n");

for(let i = 0; i < 10; i++){
	console.log(i);

	setTimeout(function(){
		console.log(`The number is ${i}`);
	})	
}

