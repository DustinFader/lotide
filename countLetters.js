const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`❤✅❤ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🔴🤔🔴 Assertion Failed: ${actual} !== ${expected}`);
};

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
}

console.log(countLetters("strong gork"));