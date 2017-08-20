var person = {
	firstname: '',
	lastname: '',
	greet: function(){
		return this.firstname + ' ' + this.lastname;
	}
}

// 
// Object.create:
// 
// bir fonksiyona prototype oluşturduğumuzda, eklediğimiz prototype
// prototype chain'in en altına gider
// ama Object.create yaparken aslında person objectini,
// yeni oluşturduğumuz objectin prototype ı haline getiriyoruz
// bu şekilde oluşan object chainin en yukarısında olduğundan
// prototype'ı olan firstname, lastname, greet'i override edebilirken
// aynı zamanda fonksiyonlarınada erişebiliyor.
// 

var nusu = Object.create(person);
nusu.firstname = 'Nusu';
nusu.lastname = 'Alabuga';

console.log(nusu.greet());

var alex = Object.create(person);
alex.firstname = 'Alex';
alex.lastname = 'Moran';

console.log(alex.greet());