let info = {};
info.name = "Abid Hasan";
info.age = "26 Years";
info.print = function(){
          console.log(this.name+ ' ' + this.age);
}
info.print();

let personInfo = { 
     name: "demo",
     age: "00 Years",
     skills: ['Javascript, PHP, C'],

     print: function(){
           console.log(this.name+ ' ' + this.age + ' ' +this.skills);
     }         
}
personInfo.print();

// travers all property value
for (let i in personInfo) {
    console.log(personInfo[i]);   
}

// object travers 
let persons = [
     {
          name: "Abir",
          age: 22,
     },
     {
          name: "Ratul",
          age: 26,
     },
     {
          name: "Akash",
          age: 30,
     },
     {
          name: "Rahat",
          age: 20,
     }
];
persons.forEach(function(infos){
     console.log(infos.name);
});