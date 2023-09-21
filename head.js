const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`❤✅❤ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🔴🤔🔴 Assertion Failed: ${actual} !== ${expected}`);
};

//returns the head of the givin array
const head = (arr) => {
  return arr[0];
};

//test cases
assertEqual(head([1, 2, 3]), 1);
assertEqual(head(["bad", "good", "neutral", "Happenstance"]), "bad");
assertEqual(head([, 0]), );
assertEqual(head([0]), 0);
