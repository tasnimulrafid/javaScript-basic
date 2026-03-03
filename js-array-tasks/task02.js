function printArray(arr){
    for(item of arr){
        console.log(item);
    }
    console.log("---------------------");
}
const places = ["chittagong", "sylhet", "bandarban"];
// printArray(places);

places.push("cox's bazar");
// printArray(places);

places.push("sundarban");
places.push("khagrachori");
printArray(places);

places.pop();
printArray(places);