// loops through every item in givin array using a callback function on each and returns the new array.
const map = (arr, callback) => {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;