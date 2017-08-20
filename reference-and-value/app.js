// 
// Pass By Value
//
// Aşağıdaki örnekte
// console.log yapıldığında a'nın 2 olmasını beklersiniz
// ama çıktı 1 olacaktır.
// 
// terimler:
// 
// primitive value: object olmayan herhangi bir value,
// yani string olabilir boolean olabilir ama object olamaz.
// 
// 
// neden?
// javascriptte primitive value olan bir variable'ı,
// yeni bir variable'a atadığınızda yada fonksiyona soktuğunuzda
// bunu kopyalayarak memoryde farklı bir adrese linklenir
// yani bu olayı yaptıktan sonra kopyanın değerini değiştirsenizde
// aslının değeri değişmez
// 

function change(b) {
	b = 2;
}

var a = 1;
change(a);
console.log(a);


// 
// Pass By Reference
// 
// Aşağıdaki örnekte
// pass by value gibi bir çıktı beklensede çıktı:
// { prop1: [Function], prop2: {} }
// olacaktır.
// 
// neden?
// C bir non-primitive value yani Object olur
// Pass By Value'da birini değiştirdiğinizde değişen memoryde farklı bir
// linke bağlı olduğu için diğerini etkilemezken
// 
// Pass By Reference'da
// Object bir fonksiyona sokulduğunda veya
// farklı bir variable'a atandığı zaman memoryde aynı linke bağlıdır
// bu yüzden bunlardan birini değiştirdiğinizde hepsi değişir.
// 

function changeObj(d) {
	d.prop1 = function () {};
	d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);