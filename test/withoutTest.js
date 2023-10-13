const assert = require("chai").assert;
const without = require("../without");

// test cases
describe("#without", () => {
  it("returns [1,3] by taking out [2] from [1, 2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [2]), [1,3]);
  });

  it('returns empty array by taking out [1,1,2,3,4] from [1,1,1]', () => {
    assert.deepEqual(without([1,1,1], [1,1,2,3,4]), []);
  });
});