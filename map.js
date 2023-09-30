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

const assertArrayEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`❤✅❤ Assertion Passed: ${array1} === ${array2}`);
  } else console.log(`🔴🤔🔴 Assertion Failed: ${array1} !== ${array2}`);
};
// loops through every item in givin array using a callback function on each and returns the new array.
const map = (arr, callback) => {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["clean", "the", "pateo", "to", "not", "slip", "again"];
console.log(map(words, word => word[0]));

assertArrayEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
assertArrayEqual(map(words1, word => word[1]), ["l", "h", "a", "o", "o", "l", "g"]);
assertArrayEqual(map(words, word => word[0] + 1), ["g1", "c1", "t1", "m1", "t1"]);
assertArrayEqual(map(words, word => word[0] + "ort"), ["gort", "cort", "tort", "mort", "tort"]);