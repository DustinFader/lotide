const letterPositions = function(sentence) {
  const results = {};
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


let test = letterPositions("hello");
assertArrayEqual(test["h"].join(","), [0].join(","));
assertArrayEqual(test["e"].join(","), [1].join(","));
assertArrayEqual(test["l"].join(","), [2,3].join(","));
assertArrayEqual(test["o"].join(","), [4].join(","));