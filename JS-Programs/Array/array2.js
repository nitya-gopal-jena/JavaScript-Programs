

/*

    Q. Add a new element to the end of an array using push() and display the updated array.

*/



let arr = ['Apple', 'Mango', 'Banana', 'Grapes'];
arr.push('Orange');
console.log('Updated array: ', arr);



// Add element dynamically (user input)
// Import prompt-sync package to work with prompt() in Node.js environment.
const prompt = require('prompt-sync')();

let arr1 = ['Apple', 'Mango', 'Banana', 'Grapes'];
let newEle = prompt('Enter a fruit name to add: ')
arr.push(newEle);

console.log('Updated array: ', arr);
