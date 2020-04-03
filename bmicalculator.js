//var bmi=calculate(70,1.8);
function calculate(weight,height){
    bmi=weight/(height*height);
//(height*height) or Math.pow(height,2) just use whatever you wanna use.
return bmi;
}

var user= prompt("ENTER YOUR WEIGHT :");
var high = prompt("ENTER YOUR HEIGHT in meters");
var cal;
cal = calculate(user,high);
console.log(cal);