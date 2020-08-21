// Mimic Word-Wrap

// 2 args:

//   words - long String of words
//   maxLen - Int of max len of any line.

// Split that string, such that each line is no larger than that #.
// Only breaking at Spaces.

function wrapWords(words, maxLen) {
  if (words.length > maxLen) {
    let step = maxLen;

    for (; step > 0 && words[step] != ' '; step--) {
      // Roll pointer backwards from MaxLen until you find a space.
      // Truncate Left chunk there. Pass the Right into next recursion.
    }

    if (step > 0) {
        let left = words.substring(0, step);
        let right = words.substring(step + 1);
        // Pass only "right" chunk into next recursion.

        return left + "\n" + wrapWords(right, maxLen);
    }
  }

  return words;
}

module.exports = wrapWords;