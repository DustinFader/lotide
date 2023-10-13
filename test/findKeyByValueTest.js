const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

// test cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

describe("#findKeyByValue", () => {
  it("returns 'drama' from (bestTVShowsByGenre, 'The Wire')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined from (bestTVShowsByGenre, 'That '70s Show')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it('returns sci_fi from (bestTVShowsByGenre, "The Expanse")', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });
  it('returns undefined from (bestTVShowsByGenre, "")', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);
  });
});