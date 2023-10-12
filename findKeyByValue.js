const findKeyByValue = (bestByGenre, show) => {
  for (let item of Object.keys(bestByGenre)) {
    if (bestByGenre[item] === show) {
      return item;
    }
  }
};

module.exports = findKeyByValue;