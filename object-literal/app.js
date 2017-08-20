// 
// Object Literal: Name / Value Pairs seperated by commas and surrounded 
// by curly braces 
// 

// Example:
var person = {
	firstname: 'nusu',
	lastname: 'alabuga',
	greet: function(){
		console.log('Hi my savior '+ this.firstname + " " + this.lastname);
	}
}

person.greet();

// instead of dots alse brackets allows to access

console.log( person['firstname'] );

// or binding a value

var ln = "lastname";

console.log( person[ln] );