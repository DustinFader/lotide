const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) { //compare lengths
    for (let item of Object.keys(object1)) {
      if (!eqArrays(object2[item], object1[item])) { //goes through the arrays checking if each matches. Same goes with strings but letter by letter. Could use Array.isArray but this feels more readable.
        return false;
      }
    }
    return true;
  }
  return false;
};

module.exports = eqObjects;