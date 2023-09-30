const takeUntil = (arr, callback) => {
  let result = [];
  for (let item of arr) { // loop through items and adding them to new array until callback is true.
    if (!callback(item)) {
      result.push(item); // adds item to new array.
    } else break; // breaks from loop once callback is true.
  }
  return result;
};

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

assertArrayEqual(takeUntil([1, -1, 2], x => x < 0), [1]);
assertArrayEqual(takeUntil(["one", "two", "three"], x => x.length > 3), ["one", "two"]);
assertArrayEqual(takeUntil([0, 2, 4, 6, 8, 9, 10, 12, 14], x => x % 2 !== 0), [0,2,4,6,8]);