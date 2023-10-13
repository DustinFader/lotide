const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

// test cases
describe("#takeUntil", () => {
  it("returns [1] from the array and callback [1, -1, 2], x => x < 0", () => {
    assert.deepEqual(takeUntil([1, -1, 2], x => x < 0), [1]);
  });

  it('returns ["one", "two"] from the array and callback ["one", "two", "three"], x => x.length > 3', () => {
    assert.deepEqual(takeUntil(["one", "two", "three"], x => x.length > 3), ["one", "two"]);
  });

  it('returns [0,2,4,6,8] from the array and callback [0, 2, 4, 6, 8, 9, 10, 12, 14], x => x % 2 !== 0', () => {
    assert.deepEqual(takeUntil([0, 2, 4, 6, 8, 9, 10, 12, 14], x => x % 2 !== 0), [0,2,4,6,8]);
  });
});