
/*

    Q. Create a function that takes an array and returns a new array with elements in reverse order.

*/


function reverseArrayElements() {
    let arr = [10, 20, 30, 40, 50, 60];
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