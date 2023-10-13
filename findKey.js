// Checks the givin objects values of object where if callback determines the first value it reaches is true then returns its key.
const findKey = (object, callback) => {
  for (let key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;