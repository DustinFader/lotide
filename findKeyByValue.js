// Checks the givin values of object where the first value it comes across equals the same as the value givin then returns its key.
const findKeyByValue = (bestByGenre, show) => {
  for (let item of Object.keys(bestByGenre)) {
    if (bestByGenre[item] === show) {
      return item;
    }
  }
};

module.exports = findKeyByValue;