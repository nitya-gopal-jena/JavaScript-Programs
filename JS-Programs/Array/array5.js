

/*

    Q. Given an array, rotate its elements to the right by k positions.
    
    Example:
    Input: [1, 2, 3, 4, 5], k = 2  
    Output: [4, 5, 1, 2, 3]

*/


// Import prompt-sync package to work with prompt() in Node.js environment.
const prompt = require('prompt-sync')();

// let arr = [1, 2, 3, 4, 5];

let arr = prompt('Enter the elements by separated by commas: ');
arr = arr.split(',').map(Number);
let rotateArr = [];
let k = prompt('Enter the k position from where want to rotate: ');

k = k % arr.length;

for (let i = 0; i < arr.length; i++) {
    let newIndex = (i + k) % arr.length;
    rotateArr[newIndex] = arr[i]
}

console.log('Rotate array: ', rotateArr);
