// Takes every element in a nested array and puts them into a non-nested array.
// maybe a todo of turning this into a recursive function
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

module.exports = flatten;