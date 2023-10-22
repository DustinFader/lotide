// Removes all instances of every item in array1 with array2 items being ones to remove.
const without = (source, itemsToRemove) => {
  let newSource = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === source[i]) {
        break;
      } else if ((itemsToRemove.length - 1) === j) {
        newSource.push(source[i]);
      }
    }
  }
  return newSource;
};

module.exports = without;