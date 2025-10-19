/*

Q. Find the given element index number from an array

*/


// Import prompt-sync package to work with prompt() in Node.js environment.
const prompt = require('prompt-sync')();

let arr = prompt('Enter the elements to create an array : ')
arr = arr.split(',').map(Number);

let findEle = prompt('Enter the element want to find the index no :');

for (let i = 0; i < arr.length; i++){
    if (arr[i] == findEle) {
     console.log(`The element ${findEle} index no is :`, i);
     
    }    
 }

