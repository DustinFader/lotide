const assert = require('chai').assert;
const middle = require('../middle');

// // middle test cases
describe("#middle", () => {
  
  it("returns empty array from [1,2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  
  it('returns [2] from [1,2,3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('returns [2,3] from [1,2,3,4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('returns [2,3] from [1,2,3,4,5,6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});