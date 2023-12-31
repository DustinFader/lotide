const assert = require("chai").assert;
const flatten = require("../flatten");

// test case
describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] from nested array", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns [1,2,1,2,1,4,5] from multi-nested array", () => {
    assert.deepEqual(flatten([1,2,[1,2,[1,[4],5]]]), [1,2,1,2,1,4,5]);
  });
});