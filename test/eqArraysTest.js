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

  it('returns true if both nested arrays equal each other', () => {
    assert.strictEqual(_.eqArrays([2, [2, [2, 4]]], [2, [2, [2, 4]]]), true);
  });

  it('returns true if both nested arrays equal each other', () => {
    assert.strictEqual(_.eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it('returns false since value and array dont equal each other', () => {
    assert.strictEqual(_.eqArrays(1, [1]), false);
  });

  it('returns false since both arrays dont equal each other', () => {
    assert.strictEqual(_.eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it('returns false since both arrays dont equal each other', () => {
    assert.strictEqual(_.eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });

  it('returns true since both arrays equal each other', () => {
    assert.strictEqual(_.eqArrays([[2, 3], ["try"]], [[2, 3], ["try"]]), true);
  });
});