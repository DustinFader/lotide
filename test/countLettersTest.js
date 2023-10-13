const assert = require("chai").assert;
const countLetters = require("../countLetters");

// test case
describe("#countLetters", () => {
  it("returns { s: 1, t: 1, r: 2, o: 2, n: 1, g: 2, k: 1 } form strong gork", () => {
    assert.deepEqual(countLetters("strong gork"), { s: 1, t: 1, r: 2, o: 2, n: 1, g: 2, k: 1 });
  });
});