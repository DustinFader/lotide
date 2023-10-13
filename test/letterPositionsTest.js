const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

//test cases
const test = letterPositions("hello");

describe("#letterPositions", () => {
  it("returns [0] from test['h']", () => {
    assert.deepEqual(test["h"], [0]);
  });

  it('returns [1] from test["e"]', () => {
    assert.deepEqual(test["e"], [1]);
  });

  it('returns [2,3] from test["l"]', () => {
    assert.deepEqual(test["l"], [2,3]);
  });

  it('returns [4] from test["o"]', () => {
    assert.deepEqual(test["o"], [4]);
  });
});