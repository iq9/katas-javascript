'use strict';

const fs = require('fs');

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

/*
 * Complete the 'lastLetters' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING word as parameter.
 *
 * Returns: last 2 letters separated by a space.
 */

function lastLetters(word) {
  let firstWord = word[0];
  let lastOne = firstWord.slice(-1);
  let secondToLast = firstWord.slice(-2, firstWord.length - 1);

  return lastOne + ' ' + secondToLast;
}

function main() {
  let res = lastLetters(inputString);

  console.log(res);
}

