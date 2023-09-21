const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`❤✅❤ Assertion Passed: ${actual} === ${expected}`);
  } else if (Array.isArray(actual) && actual.length === 0 && Array.isArray(expected) && actual.length === 0) {
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
const emp1 = [];
console.log(tail(words));
assertEqual(words.length, 3);
assertEqual(tail([1]), []);
assertEqual(tail([]), []);

//1:14:33