// Takes every element in a nested array and puts them into a non-nested array.
const flatten = (arr) => {
  let newArray = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      let nestArray = flatten(item);
      for (let i = 0; i < nestArray.length; i++) {
        newArray.push(nestArray[i]);
      }
      continue;
    }
    newArray.push(item);
  }
  return newArray;
};

module.exports = flatten;