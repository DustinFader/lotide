const assert = require('chai').assert;
const head = require('../head');

// head test cases
// console.log("\n-- head test cases --");
// assertEqual(head([1, 2, 3]), 1);
// assertEqual(head(["bad", "good", "neutral", "Happenstance"]), "bad");
// assertEqual(head([, 0]),); //eslint may say this is wrong but i wanted to test it this way anyways.
// assertEqual(head([0]), 0);

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it('returns "5" for ["5"]', () => {
    assert.strictEqual(head(['5']), '5');
  });
});