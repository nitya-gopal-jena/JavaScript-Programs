



let numbers = [23, 89, 15, 42, 67];


let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}


console.log("The smallest number is:", min);
