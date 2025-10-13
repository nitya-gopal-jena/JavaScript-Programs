
/*

    Q. Write a function that takes an array of numbers and returns the largest number.

*/


//Without Method
// Import prompt-sync package to work with prompt() in Node.js environment.
const prompt = require('prompt-sync')();

function largestNumber() {

    // let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; 
    let arr = prompt('Enter array element separated by commas:  ')
    arr = arr.split(',').map(Number);
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    console.log(largest);

}
largestNumber()


// With Method 
function largestNumber() {

    let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    let largest = Math.max(...arr)

    console.log(largest);
    
}
largestNumber()