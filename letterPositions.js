//takes in a string and returns an object where each letter has an array
// of possitions where they would be
const letterPositions = function(sentence) {
  const results = {}; //creates the output before any changes
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]] === undefined) {
        results[sentence[i]] = [];
      }
      results[sentence[i]].push(i);
    }
  }
  return results;
};

//tests if arrays equal each other and returns boolean
const eqArrays = (array1, array2) => {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else return false;
  return true;
};

//test arrays and does console.log() Assertion passed if true or Assertion Failed if false
const assertArrayEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`❤✅❤ Assertion Passed: ${array1} === ${array2}`);
  } else console.log(`🔴🤔🔴 Assertion Failed: ${array1} !== ${array2}`);
};

//test cases
let test = letterPositions("hello");
assertArrayEqual(test["h"], [0]);
assertArrayEqual(test["e"], [1]);
assertArrayEqual(test["l"], [2,3]);
assertArrayEqual(test["o"], [4]);