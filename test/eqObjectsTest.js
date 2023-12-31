const assert = require("chai").assert;
const eqObjects = require('../eqObjects');

// eqObjects test cases
describe("#eqObjects", () => {
  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject = { size: "medium", color: "red"};
  it("returns true when givin objects are compared and are equal", () => {
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
  
  const longSleeveShirtObject = { size: "small", color: "black", sleeveLength: "long" };
  it('returns false when givin objects are compared and are not equal', () => {
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });
  
  const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
  const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
  it('returns true when givin objects are compared and are equal', () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });
  
  const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
  it('returns false when givin objects are compared and are not equal', () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });

  it('returns true when nested objects are compared and are equal', () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it('returns false when nested objects are compared and are not equal', () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 },    { a: { z: 1 }, b: 2 }), false);
  });

  it('returns false when nested objects are compared and are not equal', () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 },    { a: 1, b: 2 }), false);
  });
});