const assert = require("chai").assert;
const _ = require("../index");

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

const result1 = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it("returns 1 from result1['Jason']", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it('returns undefined from result1["Karima"]', () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it('returns 2 from result1["Fang"]', () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it('returns undefined from result1["Agouhanna"', () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});