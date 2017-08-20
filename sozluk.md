### First Class Functions
çoğu programlama dillerinde fonksiyonlar type'a göre variable kabul eder, first class functionlarda fonksiyonların içine herhangibir şey girebilir object hatta function bile.

### Expression
A block of code results in a value

#### Function Expression
bir variable'ın fonksiyon olması

#### Function Expression Örneği
```javascript
var greetme = function(){
	console.log("hi"); 
}
```

### Invoke
Fonksiyonu Çalıştırmak

### Name/Value Pair
Bir ismin bir değerle eşleştirilmesi
"a name maps an value"

```javascript
var myName = "Nusu";
```

### Object
"A collection of Name/Value Pairs"

### Object Literal
"Name / Value pairs seperated by commas(,) and surrounded by curly braces '{}'"

```javascript
var myObject = {
	name: "Nusu",
	surname: "Alabuga"
}
```

### Inheritance
"One object gets access to the properties and methods of another object"
A objesinin B objesinin methodlarına ve propertylerine ulaşabilmesi


### Primitive Value
Object olmayan herhangi bir value

```javascript
// primitive
var prim = 1;
// non-primitive
var nonPrim = {};
```

### Scope
Kodun içinde erişebildiğin variable ve fonksiyonlardır
"where in code you have access to particular variable or function"

### Mutate
Bir şeyi değiştirmek
örneğin: bir object'e method veya property eklediysen, bu object mutate edilmiş "mutated" olur.

### Template Literal
A way to concatenate strings in ES6

### Syntactic Sugar
A feature that only changes how you type something, but nothing changes under the hood