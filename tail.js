const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`❤✅❤ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual.length === 0 && expected.length === 0) {
    console.log(`❤✅❤ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🔴🤔🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = (arr) => {
  if (arr.length <= 1) {
    return [];
  }
  return arr.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);
assertEqual(tail([1]), []);
assertEqual(tail([]), []);