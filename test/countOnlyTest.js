const assert = require("chai").assert;
const countOnly = require("../countOnly");

// test cases
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it("returns 1 from result1['Jason']", () => {
    assert.deepEqual(countOnly(result1["Jason"]), 1);
  });

  it('returns undefined from result1["Karima"]', () => {
    assert.deepEqual(countOnly(result1["Karima"], undefined));
  });
  it('returns 2 from result1["Fang"]', () => {
    assert.deepEqual(countOnly(result1["Fang"], 2));
  });
  it('returns undefined from result1["Agouhanna"', () => {
    assert.deepEqual(countOnly(result1["Agouhanna"], undefined));
  });
});