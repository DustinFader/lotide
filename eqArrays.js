// checks if two arrays equal the same. True if they are.
const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) { // if lengths arent the same then not equal
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      // if callback is true then continues to next item in array
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
      continue;
    }
    // checks if base value is the same
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;