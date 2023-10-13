// We look through the array of allItems and adds those that exist in itemsToCount object and how many 
// there are in the array into an object then returns that object.
const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item] === undefined) {
        results[item] = 0;
      }
      results[item] += 1;
    }
  }
  return results;
};

module.exports = countOnly;