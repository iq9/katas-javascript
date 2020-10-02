'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function getAllSubstrings(str) {
  let i, j, result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}

/*
 * Complete the 'commonSubstring' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY a
 *  2. STRING_ARRAY b
 *
 * RETURNS: array of the common substrings between two given
 * strings.
 */
function commonSubstring(a, b) {
  let allSubsA = getAllSubstrings(a);
  let allSubsB = getAllSubstrings(b);
  let intersection = allSubsA.filter(x => allSubsB.includes(x));

  return intersection;
}

function main() {
  const a = readLine();
  const b = readLine();

  let found = commonSubstring(a, b);

  console.log(found.length + ' common substrings: ' + found);
}