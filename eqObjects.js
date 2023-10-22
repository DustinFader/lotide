const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) { // not equal if lengths are different

    for (let item of Object.keys(object1)) {
      let item1 = object1[item];
      let item2 = object2[item];

      if (typeof item1 === "object" && !Array.isArray(item1)) {
        if (!eqObjects(item1, item2)) {
          return false;
        }
      }
      //goes through the arrays checking if each matches.
      if (!eqArrays(item1, item2)) {
        return false;
      }
    }
    return true;
  }
  return false;
};

module.exports = eqObjects;