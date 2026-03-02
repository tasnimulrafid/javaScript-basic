var age = 60;
var fare = 800;
var discount = 0;
var isStudent = false;

if (age < 10) {
    discount = 100;
}
else if (isStudent) {
    discount = 50;
}
else if (age >= 60) {
    discount = 15;
}

fare = fare - (fare * discount / 100);

console.log("fare:", fare);