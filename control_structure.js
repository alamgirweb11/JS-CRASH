// if else statement
let item = 20;
if(item > 25){
     console.log("Item no correct");
}else{
      console.log("Item no incorrect");
}

// elseif ifelse statement

let age = 20;
if(age > 22){
    console.log("You age is under 22.");
}
else if(age >= 23){
   console.log("You age is under 23.");     
}
else if(age < 21){
     console.log("Your age is "+age+ ".");
}
else{
    console.log("Nothing");
}
// switch statement
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
         day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";

    default:
        break;
}

console.log(day);

let apple_price = 180;
switch (apple_price) {
    case 120:
       price = "Price Not Match";
       break;
    case 180:
       price = "Price Match";
       break;
    default:
        break;
}
console.log(price);