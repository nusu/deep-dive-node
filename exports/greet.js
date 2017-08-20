exports = function(){
	console.log('Hello');
}

// 
// Exports'u yeniden tanımladığında, javascript
// referansı ( pass by reference ), bozarak bu ikisini ayırır
// 
// bu yüzden aşağıdaki çıktıyı alırsın:
// 
// [Function: exports]
// {}

console.log(exports);
console.log(module.exports);