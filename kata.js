// Kata 1 - Lowest 2 integers of an array.

function sumTwoSmallestNumbers(numArr) {
  numArr.sort((a, b) => { return a - b });

  return numArr[0] + numArr[1];
}

let arr = [100, 3, 4, 7, 9, 50];

let output = sumTwoSmallestNumbers(arr);

console.log(output);
