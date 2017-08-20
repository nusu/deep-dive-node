// 
// IIFE : Immediately Invoked Function Expressions
// Bir fonksiyonun anında çalışması
// 

// 
// normal fonksiyon aşağıdaki şekilde invoke olur (çalışır)
// 
function a(){}
a();

//
// IIFE ise
// bu şekilde çalışır

(function(){

}())

// ^
// ( function(){
// 
// ) '=> () <= Invoker' )
// 


// 
// Aşağıdaki örneğin çıktısının,
// Biz şu şekilde olmasını beklerken:
// ---
// Babuş
// Babuş
// ---
// 
// Bu şekilde olur:
// ---
// Babuş
// Nusu
// ---
// 
// terim
// scope: bir kodun içinde erişebileceğin variable ve fonksiyonlar 
// 
// neden?
// javascript scope'u gereği hiç bir fonksiyon dışardaki bişeyi etkileyemez
// fonksiyonun içindeki herşey fonksiyon tarafından korunur.
// 

var firstName = "Nusu";

(function(){
	var firstName = "Babuş";
	console.log(firstName);
}());

console.log(firstName);