const myDog = {
	name: "ferat", 
	age: 3
};

const highlight = (data) => { return `<p>${data}</p>` };

const sentence = highlight`My dog is ${myDog.name} and he is ${myDog.age} years old`;

console.log(sentence);