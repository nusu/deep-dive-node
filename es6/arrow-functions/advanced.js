const race = 'Gokart';

const losers = ['ceren', 'nusu'];

// ^ object'e çeviricez
// const lose = losers.map((loser,i) => {name: loser, race: race, place: i + 1});
// ^ throws an error

// neden?
// {}'yı objecte dönüştürmek amacıyla koyduk ama, functionun içi sanıyor, bu yüzden şöyle bi trick
// yapıcaz
// const lose = losers.map((loser,i) => ({name: loser, race: race, place: i + 1}));


// key - value aynı ise
// yani
// race: race
// durumu
// direk bu şekilde kullanılabilir
let lose = losers.map((loser,i) => ({name: loser, race, place: i + 1}));

// bunu kullanarak basitleştirelim
lose = losers.map((name,i) => ({name, race, place: i + 1}));


console.log(lose);


const ages = [20, 15, 60, 72, 88];

// yaşı 60dan büyük olanlar yaşlıdır
const old = ages.filter(age => age >= 60);

console.log(old);
// ^ [60, 72, 88]