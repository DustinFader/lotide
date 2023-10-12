const findKey = (object, callback) => {
  for (let key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;