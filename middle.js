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


const middle = (array) => {
  let arrLen = array.length;
  if (arrLen < 3) {
    return [];
  }
  if (arrLen % 2 === 0) {
    return array.slice(arrLen / 2 - 1, arrLen / 2 + 1);
  }
  return [array[Math.floor(arrLen / 2)]];
};


assertArrayEqual(middle([1, 2]), []);
assertArrayEqual(middle([1, 2, 3]), [2]);
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);