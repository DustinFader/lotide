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

const flatten = (arr) => {
  let newArray = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        newArray.push(item[i]);
      }
      continue;
    }
    newArray.push(item);
  }
  return newArray;
};

assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);