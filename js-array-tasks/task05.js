const nums = [1, 2, 3, 4, 5];
const letters = ['a', 'b', 'c', 'd'];

const combined = nums.concat(letters);

function printArray(arr){
    for(item of arr){
        console.log(item);
    }
    console.log("---------------")
}
printArray(letters);
printArray(nums);
printArray(combined);