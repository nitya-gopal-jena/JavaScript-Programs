
/*

    Q. Write a function that returns the index of a given value in an array. If not found, return -1.

*/




// Import prompt-sync package to work with prompt() in Node.js environment.
const prompt = require('prompt-sync')();

function returnIndexNo() {
    // let arr = [1, 3, 4, 10, , 35, 7, 70, 9, 10];

    let arr = prompt('Enter array element separated by commas:  ')
    arr = arr.split(',').map(Number);
    let value = parseInt(prompt('Enter the element want to search index no: '))

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return i;
        }
    }
    return -1;
}

console.log('Index No is:', returnIndexNo());
