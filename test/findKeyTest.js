const assert = require("chai").assert;
const findKey = require("../findKey");

// test cases
let test = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "Alohora":   { stars: 2 },
  "Kudinshaw": { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "Alohora"

describe("#findKey", () => {
  it("returns Alohora form test variable holding the objent and callback", () => {
    assert.strictEqual(test, "Alohora");
  });
  it("returns undefined", () => {
    assert.strictEqual(findKey({path: "court", pinch: "jork", mort: "fort"}, x => x === "port"), undefined);
  });

  it('returns "pinch"', () => {
    assert.strictEqual(findKey({path: "court", pinch: "jork", mort: "fort"}, x => x === "jork"), "pinch");
  });

  it('returns "pork"', () => {
    assert.strictEqual(findKey({treb: 2, "pork": "2", 1: "fort"}, x => x === "2"), "pork");
  });
});