// Reverse a string.

function rev(str) {
  let stringArr = [...str];
  let output = '';

  stringArr.forEach((p) => {
    output = p + output
  });

  return output;
}

console.log(rev('abc'));
console.log(rev('dcg'));
