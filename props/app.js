function Person(firstName, lastName) {

	this.firstName = firstName; 
	this.lastName = lastName; 

}

// 
// Aşağıdaki Prototype Person fonksiyonuna ait değildir
// bu prototype sadece Person ile oluşturulan objelere aittir
// 
// mesela bu örneğin prototype'a erişimi olmayacaktır:
//  var nusu = Person("a", "b"); 
// 
// ama bu örnek prototype'a erişebilir:
//  var nusu = new Person("a", "b");
// 
// neden?
// çünkü ilk örnek sadece fonksiyonu çağırırken 
// ikinci örnekte nusu variable'ı object haline gelir
// yani Persondan oluşan bir obje olur
// 
// mantık?
// 'this' object'i Ecma Script gereği her zaman default olarak gelir
// function constructorlar ise bu 'this' objectini ve diğer defaultları
// boş bi halde yaratmak için kullanılır.
// 'new' keywordu ile birlikte yeni bir object yaratılır ve 'this' boş olarak gelir
// bu sayede içine property ve method ekleyebiliriz
// 

Person.prototype.greet = function() {
	console.log("Hi my savior, " + this.firstName + " " + this.lastName );
}

// 
// Wrong Way
// 
// var nusu = Person("Nusu", "Alabuğa");
// If you use this, u will get an error
// nusu.greet();
// 

// 
// True Way
// 
var nusu = new Person("Nusu", "Alabuğa");


// 
// This allows you to access prototype greet function 
// 
nusu.greet();