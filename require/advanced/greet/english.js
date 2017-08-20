var greet = function() {
	console.log(this.greetings.en +" "+ this.name);
}

module.exports = greet;