const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`❤✅❤ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🔴🤔🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = (bestByGenre, show) => {
  for (let item of Object.keys(bestByGenre)) {
    if (bestByGenre[item] === show) {
      return item;
    }
  }
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);