const assert = require("chai").assert;
const _ = require("../index");

// eqArrays test cases
describe("#eqArrays", () => {
  it("returns true if both arrays are equal", () => {
    assert.strictEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it('returns false if both arrays dont equal each other', () => {
    assert.strictEqual(_.eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it('returns true if both arrays are equal', () => {
    assert.strictEqual(_.eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it('returns false if both arrays dont equal each other', () => {
    assert.strictEqual(_.eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});

