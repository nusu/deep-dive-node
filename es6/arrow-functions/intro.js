const names = ["nusu", "alper", "ceren"];

const fullNames = names.map(function(name){
	return `${name} klausson`;
});

// into the arrow funcs
const fullNames2 = names.map((name) => {
	return `${name} klausson`;
});

// if just one param, delete brackets
const fullNames3 = names.map(name => {
	return `${name} klausson`;
});

// return without 'return' keyword
const fullNames4 = names.map(name => `${name} klausson`);

console.log(fullNames4);

// if there are no arguments at all, you should give ()
const fullNames5 = names.map(() => `klausson`);

console.log(fullNames5);

// Anonymous functions

const sayMyName = (name) => { console.log(name) }

sayMyName("nusu");