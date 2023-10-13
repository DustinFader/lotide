const assert = require('chai').assert;
const head = require('../head');

// head test cases
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it('returns "5" for ["5"]', () => {
    assert.strictEqual(head(['5']), '5');
  });

  it('returns "bad" from ["bad", "good", "neutral", "Happenstance"]', () => {
    assert.strictEqual(head(["bad", "good", "neutral", "Happenstance"]), "bad");
  });

  it('returns undefined from [, 0] which would be undefined at the spot of the array', () => {
    assert.strictEqual(head([, 0]),); //eslint may say this is wrong but i wanted to test it this way anyways.
  });

  it('returns 0 from [0]', () => {
    assert.strictEqual(head([0]), 0);
  });
});