// js data Type
/**
 * 1. Number 
 * 2. String 
 * 3. Boolean
 * 4. Undefined 
 * 5. Null
 * 6. Object
 * 7. Array
 * 8. Function
 * * Disscusion about basic data type
 */

// Number
 let x = 10;
 let y = 20;
 console.log(x,y);

// String
let greetings = "Welcome";
console.log(greetings);

// Boolean
console.log(x==y);

// Undefined
let variable;
console.log(variable);

// Null
let nullValue = null;
console.log(nullValue);

// object 
let fruits = {
       "First" : "Mango",
       "Second" : "Banana",
       "Third" : 3
}
console.log(fruits);
// call the first item
console.log(fruits.First);

// Array
let info = [
      'Jhon','john@gmail.com','445250'
];
console.log(info);
// call only the name
console.log(info[0]);

// Function
let callMe = function(){
    return "function";  
}
console.log(callMe())

// typeof operator
var a = 2.050;
console.log(typeof a);