var greet1 = require("./greet1");
greet1();


var greet2 = require('./greet2').greet;
greet2();


var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = "Changed hello world! from greet3 to greet3B";

greet3.greetPrototype();

// 
// Aşağıdaki fonksiyonun çıktısının 
// Hello from greet3
// olmasını beklesenizde, çıktısı 
// "Changed hello world"
// olur.
// 
// neden?
// node js'in require fonksiyonu bir modül bir kere çağırıldığında
// cache'e alır bir kez çağırıldıktan sonra istediği kadar çağırılsın
// pass by reference olduğu için, memoryde aynı adreste tutulduğundan
// yukarıda değişen değerler aşağıyada yansır.
// 
// peki ya bu benim işime gelmiyorsa?
// greet4'e bak
// 

var greet3B = require('./greet3');
greet3B.greet();


// 
// Yukarıda require fonksiyonunun cache'e almasından dolayı
// oluşan durumun önünde geçmek için
// module.exports = new Greetr();
// kodunu
// module.exports = Greetr; <= () bilerek yok çünkü fonksiyon çalışsın istemiyoruz
// ile değiştirdiğimizde
// ve burada constructor olarak kullandığımızda bu olayı aşabiliriz
// 

var Greet4 = require('./greet4');

var greet4A = new Greet4();
greet4A.greet();
greet4A.greeting = "Changed hello world message from greet4a to greet4b";

var greet4B = new Greet4();
greet4B.greet();


// 
// Greet 5
// 

var greet5 = require("./greet5");
greet5.greet();