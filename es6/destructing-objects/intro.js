const me = {
	name: "Nusu",
	bio: "fill the bl___",
	twitter: "@nusususuzu"
};

// name ve bio diye bir variable yarat
// ve bunların değerini me objectinin içinden al
const {name, bio} = me;
console.log(`name: ${name}, bio: ${bio}`);

// renaming
const {name:adi, bio:biografi} = me;
console.log(`adı: ${adi}, biografi: ${biografi}`);

// creating variables with default values

const settings = {
	width: 100,
	color: 'blue'
};

const { width = 20, height = 300, color = 'red', type = 'square' } = settings;

// width is 20 by default but
// its already setted in our settings object
// so it becomes 100
console.log(width);

// height is setted 300 by default
// while it's not found on settings object
// it's 300.
console.log(height);


let w = {
	hair: 'bold'
};

let h = {
	length: '1.78' 
};

// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
Object.assign(w,h);

const { hair, length } = w;

console.log(hair);
console.log(length);