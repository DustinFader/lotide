// compares two inputs whether they equal eachother or not and console.logs passed or failed
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`❤✅❤ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual.length === 0 && expected.length === 0) { // if both empty arrays or empty strings then passed since they equal the same
    console.log(`❤✅❤ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🔴🤔🔴 Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;