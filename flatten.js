const flatten = (arr) => {
  let newArray = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        newArray.push(item[i]);
      }
      continue;
    }
    newArray.push(item);
  }
  return newArray;
};

module.exports = flatten;