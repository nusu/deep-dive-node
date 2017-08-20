var obj = {
	name: 'Nusu Alabuğa',
	greet: function(){
		console.log(`Hello ${this.name}`);
	},
	bye: function(param, param2){
		console.log(`Bye ${param}, ${param2}`);
	}
}

obj.greet();

// 
// Greet Fonksiyonunun içindeki, this object'ini override eder
// 
obj.greet.call({ name: "Alex Moran"});
obj.greet.apply({ name: "Alex Moran" });


// 
// Call vs Apply
// 
// ilk {} <= this objesini mutate etmek için kullanılır
//
obj.bye.call({}, 'Alex', 'Moran');
obj.bye.apply({}, ['Alex', 'Moran']);