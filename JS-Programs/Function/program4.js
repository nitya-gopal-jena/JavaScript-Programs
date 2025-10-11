
/*

    Q. Write a function that returns the index of a given value in an array. If not found, return -1.

*/


function returnIndexNo() {
    let arr = [1, 3, 4, 10, , 35, 7, 70, 9, 10];
    let value = 70;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return i;
        }
    }
    return -1;
}

console.log('Index No is:', returnIndexNo());
