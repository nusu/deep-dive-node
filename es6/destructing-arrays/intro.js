// init example

const me = ["Nusu", "fill the bl___"];
// should use [] instead of {}
// because we're using arrays now.
const [ name, bio ] = me;
console.log(name);
console.log(bio);



// example based on currencies 

const currencies = "3.91,4.65,5.27";
// ! IMPORTANT !
// don't works with { }
const [ dollar, euro, sterlin ] = currencies.split(',');
console.log(`TL: { $:${dollar}, €:${euro}, £:${sterlin} }`);



// how to get rest?

const team = ['Superman', 'Thor', 'X-Men', 'Iron Man', 'Süzme Man'];
// ... is rest operator.
const [captain, coCaptain, ...rest] = team;
console.log(rest);