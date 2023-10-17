// Checks the givin values of object where the first value it comes across equals the same as the value givin then returns its key.
const findKeyByValue = (object, value) => {
  for (let item of Object.keys(object)) {
    if (object[item] === value) {
      return item;
    }
  }
};

module.exports = findKeyByValue;