const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) { //compare lengths
    for (let item of Object.keys(object1)) {
      if (!eqArrays(object2[item], object1[item])) { 
        return false;
      }
    }
    return true;
  } 
  return false;
};

const eqArrays = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`❤✅❤ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else console.log(`🔴🤔🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};


let test = { i: "red", r:"bing"}
assertObjectsEqual(test, {i:"red", r:"bing"});