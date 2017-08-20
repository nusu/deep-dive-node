var english 	= require('./english');
var spanish 	= require('./spanish');
var greetings	= require('./greetings.json'); 

// 
// Pass By Reference uygulandığı için
// burada set edilen herşey
// dışarıdan çağırılan ve diğer fonksiyonlarda kullanılabilir
// 

var languages = {
	setName: function(name){
		this.name = name;
	},
	greetings: greetings,
	english: english,
	spanish: spanish
};
 
module.exports = languages;