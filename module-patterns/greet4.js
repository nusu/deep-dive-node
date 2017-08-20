// 
// Greet 3 Copy
// but exports without constructive function
// 

function Greetr(){
	this.greeting = "Hello from greet4";
	this.greet = function(){
		console.log(this.greeting);
	}
}

module.exports = Greetr;
