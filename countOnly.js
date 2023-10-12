// Counts letters in givin string and returns an object with keys per letter and values based on how many times they appeared.
const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (const item of allItems) {
    console.log(item);
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