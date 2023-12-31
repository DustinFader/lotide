// Counts letters in givin string and returns an object with keys per letter and values based on how many times they appeared.
const countLetters = (string) => {
  let letterCounts = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (letterCounts[letter] === undefined) {
        letterCounts[letter] = 0;
      }
      letterCounts[letter] += 1;
    }
  }
  return letterCounts;
};

module.exports = countLetters;