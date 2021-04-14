// functin declaration
function math(){
      console.log(5+5);
}
math();

// pass parameter
function param(name,email){
    console.log(name);
    console.log(email);
}
param("Demo","demo@gmail.com");

 function add(a,b){
    return a*b;
}
let addition = add(4,4)*3;
console.log(addition);

// function expression
let first = function(d,f){
     return d+f;
}
console.log(first(5,7));
// callback function
let names = ['Abir','Adeb','Akash','Ashik'];
//first method to call
names.forEach(function(name){
       console.log(name);
})
// second method to call
names.forEach(printNames);
function printNames(name){
    console.log(name);
}
// another example
function callBackFunction(x,y, callback){
      let n = x+y;
      let m = x-y;
    callback(n,m)
}
function print(n,m){
    console.log(n,m);
    console.log(n/m);
}
function multiply(n,m){
    console.log(n*m);  
}
callBackFunction(10,5,print);
callBackFunction(10,5,multiply);
// callback function with array traversing
function travers(names,callback){
     for(i=0; i<names.length; i++){
         callback(names[i])
     }
}
travers(names,function(name){
      console.log(name);
});