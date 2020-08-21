// Kata 2

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples
// of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// function solution(limit) {
//   let multiplesOfThree = [];
//   let multiplesOfFive = [];

//   for (let step = 0; step < limit; step+=3) {
//     multiplesOfThree.push(step);
//   }

//   for (let step = 0; step < limit; step+=5) {
//     multiplesOfFive.push(step);
//   }

//   let merged = multiplesOfThree.concat(multiplesOfFive);
//   merged = [...new Set([...multiplesOfThree,...multiplesOfFive])]

//   return merged.reduce((sum, x) => sum + x);
// }

function solution(limit) {
  let output = [];

  for (let step = 0; step < limit; step++) {
    if (step % 3 == 0 || step % 5 == 0) {
      output.push(step);
    }
  }

  return output.reduce((sum, x) => sum + x);
}

console.log(solution(10));