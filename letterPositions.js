// takes in a string and returns an object where each letter has an array
// of possitions where they would be
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]] === undefined) {// creates the item in object if it doesnt exist
        results[sentence[i]] = [];
      }
      results[sentence[i]].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;