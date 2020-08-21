// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

function list(hash) {
  let i = 0;
  let output = '';

  hash.forEach(character => {
    if (i < hash.length - 2) {
      output += character['name'] + ', ';
    } else if (i < hash.length - 1) {
      output += character['name'] + ' & ';
    } else {
      output += character['name'];
    }

    i++;
  });

  return output;
}


console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));
// returns 'Bart, Lisa & Maggie'

console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]));
// returns 'Bart & Lisa'

console.log(list([ {name: 'Bart'} ]));
// returns 'Bart'

console.log(list([]));
// returns ''

