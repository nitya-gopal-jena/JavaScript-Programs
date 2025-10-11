
/*
    Q. Write a function to check if an array is sorted in ascending order.

*/

function ascendingOrder() {
    let arr = [10, 20, 30, 40, 50];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > (arr[i + 1])) {
            console.log('Not in ascending order', arr);
            return; // stop checking further and return cursor to it's calling function.
        }
    }
    console.log('All the elements are in ascending order', arr);
}

ascendingOrder();