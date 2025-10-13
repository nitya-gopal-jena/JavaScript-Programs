
/*

    Q. Create a function that takes an array and returns a new array with elements in reverse order.

*/


// Import prompt-sync package to work with prompt() in Node.js environment.
const prompt = require('prompt-sync')();

function reverseArrayElements() {
    // let arr = [10, 20, 30, 40, 50, 60];

     let arr = prompt('Enter array element separated by commas:  ')
    arr = arr.split(',').map(Number);

    let reversed = [];
    let j = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed[j] = arr[i];
        j++;
    }
    console.log('original Array: ', arr);
    console.log('Reversed Array: ', reversed);

}

reverseArrayElements();