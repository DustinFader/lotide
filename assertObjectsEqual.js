const eqObjects = require('./eqObjects');

// checks whether two objects equal each other.
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect; // this will make the object more decriptive when shown in the terminal.
  if (eqObjects(actual, expected)) {
    console.log(`❤✅❤ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else console.log(`🔴🤔🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;