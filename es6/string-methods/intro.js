const course = 'RFB2';
const flightNumber = '20-AC2018-JZ';
const accountNumber = '551TR356621';

const make = 'audi';
const model = 'a5';
const colour = 'red';

console.log(`is ${course} starts with RF? : ${course.startsWith("RF")}`);

console.log(`is ${flightNumber} starts with AC after 3 character? : ${flightNumber.startsWith("AC", 3)}`);

console.log(`is ${flightNumber} ends with JZ? : ${flightNumber.endsWith("JZ")}`);

console.log(`is ${accountNumber} ends with TR in first 5 character? : ${accountNumber.endsWith("TR", 5)}`);

console.log(`is ${accountNumber} includes TR? : ${accountNumber.includes('TR')}`);


function leftPad(str, length = 20){
	return `-> ${' '.repeat(length - str.length)}${str}`;
}
console.log(`\n\n${leftPad(make)}`);
console.log(leftPad(model));
console.log(leftPad(colour));