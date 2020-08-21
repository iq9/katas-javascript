// eoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G". You have function with one side of the DNA, you need to get the other complementary side. DNA strand is never empty or there is no DNA at all.

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// DNAStrand ("ATTGC") // return "TAACG"

// DNAStrand ("GTAT") // return "CATA"

function dnaCompliments(strand) {
  // let output = [];

  // [...strand].forEach((p) => {
  //   if (p == 'A') output.push('T');
  //   if (p == 'T') output.push('A');
  //   if (p == 'G') output.push('C');
  //   if (p == 'C') output.push('G');
  // });

  // return output;

  let pairEncoding = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  return [...strand].map(x => pairEncoding[x]).join('');
}

console.log(dnaCompliments('ATTGC'));

console.log(dnaCompliments('GTAT'));