// basic discussion about array
let names = ['Abir','Akash','Ashik'];
console.log(names[0])

// array traversing
let info = ['Abir','abir@gmail.com','0140000000'];
for(i=0; i<info.length; i++){
    console.log(info[i]);
}
// total length check
console.log(info.length);
// last item
console.log(info[info.length-1]);
// index position against value
console.log(info.indexOf('abir@gmail.com'));
// add value in last using push method
let addValue = info.push("push method");
// array sort using sort method
let arraySort = info.sort();
console.log(arraySort);
// delete and  replace value
info.splice(3,1,'replace last value');
console.log(info);