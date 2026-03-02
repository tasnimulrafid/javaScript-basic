var weight = 80;
var height = 1.72;

var bmi = weight / (height ** 2);
console.log("BMI = ", bmi.toFixed(2));

if(bmi < 18.5) {
    console.log("you are underweight!");
}
else if(bmi <= 24.9){
    console.log("you are normal :)");
}
else if(bmi <= 29.9){
    console.log("you are overweight!");
}
else{
    console.log("you are obese! :(");
}