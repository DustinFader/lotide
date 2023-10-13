const assert = require('chai').assert;
const tail = require('../tail');

// tail test cases
describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [] from [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it('returns [] from []', () => {
    assert.deepEqual(tail([]), []);
  });
});