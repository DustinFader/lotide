const takeUntil = (arr, callback) => {
  let result = [];
  for (let item of arr) { // loop through items and adding them to new array until callback is true.
    if (!callback(item)) {
      result.push(item); // adds item to new array.
    } else break; // breaks from loop once callback is true.
  }
  return result;
};

module.exports = takeUntil;