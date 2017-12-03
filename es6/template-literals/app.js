const dogs = [
	{name: "ferat", age: 3},
	{name: "tulga", age: 5}
];

const markup = `${dogs.map(dog => `${dog.name} is ${dog.age * 7} years old\n`).join('')}`;

console.log(markup);