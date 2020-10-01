// Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

// For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided. For example,  indexed from . The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths:  or . The first path takes  jumps while the second takes .

// Function Description

// Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

// jumpingOnClouds has the following parameter(s):

// c: an array of binary integers
// Input Format

// The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .

// Constraints

// Output Format

// Print the minimum number of jumps needed to win the game.

// Sample Input 0

// 7
// 0 0 1 0 0 1 0
// Sample Output 0

// 4
// Explanation 0:
// Emma must avoid  and . She can win the game with a minimum of  jumps:

// jump(2).png

// Sample Input 1

// 6
// 0 0 0 0 1 0
// Sample Output 1

// 3
// Explanation 1:
// The only thundercloud to avoid is . Emma can win the game in  jumps:

'use strict';

// const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function jumpingOnClouds(c) {
  let moves = 0;

  for (let pos = 0; pos <= c.length; pos++) {
    if (c[pos + 2] == 0) {
      moves++;
      pos++;
    } else if (c[pos + 1] == 0) {
      moves++;
    }
  }

  return moves;
}

function main() {
  const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

  let result = jumpingOnClouds(c);

  console.log('Min moves to win: ' + result + "\n");
}