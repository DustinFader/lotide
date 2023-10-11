const middle = (array) => {
  let arrLen = array.length;
  if (arrLen < 3) {
    return [];
  }
  if (arrLen % 2 === 0) {
    return array.slice(arrLen / 2 - 1, arrLen / 2 + 1);
  }
  return [array[Math.floor(arrLen / 2)]];
};

module.exports = middle;