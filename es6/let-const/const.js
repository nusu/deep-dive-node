// let ile tek farklılığı
// const variableları update edilemez
// ama bu demek değil ki içindeki javascript objectlerde update edilemez
// aksine const, reassignment'a bir bütün olarak izin vermez
// dolayısıyla key, value pair değiştirilebilir.

const points = 50;
const winner = false;

if(points > 10){
	winner = true;
	// ^ throws an error
	console.log(winner);
}

console.log(winner);