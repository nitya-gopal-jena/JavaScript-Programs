
/*

    Q.   Given an array of integers, return the first element that does not repeat. If all elements repeat, return null.

*/


// Import prompt-sync package to work with prompt() in Node.js environment.
const prompt = require('prompt-sync')();

function nonRepeatingElement() {
    let arr = prompt('Enter array element separated by commas: ');
    arr = arr.split(',').map(Number)

    for (let i = 0; i < arr.length; i++) {

        let currentElement = arr[i];
        let duplicateElement = false;

        for (let j = 0; j < arr.length; j++) {
            if (i != j && arr[j] === currentElement) {
                // i!=j means the element don't compare with itself and  if arr[j] value same with currentElement value then it's duplicate 

                duplicateElement = true;
                break;
            }
        }
        if (!duplicateElement) {
            return currentElement;
        }
    }
    return null;
}

console.log(nonRepeatingElement());