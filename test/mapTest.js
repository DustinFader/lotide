const assert = require("chai").assert;
const map = require("../map");

// test cases
const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["clean", "the", "pateo", "to", "not", "slip", "again"];

describe("#map", () => {
  it('returns ["g", "c", "t", "m", "t"] from the callback words, word => word[0]', () => {
    assert.deepEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
  });

  it('returns ["l", "h", "a", "o", "o", "l", "g"] from the callback words1, word => word[1]', () => {
    assert.deepEqual(map(words1, word => word[1]), ["l", "h", "a", "o", "o", "l", "g"]);
  });

  it('returns ["g1", "c1", "t1", "m1", "t1"] from the callback words, word => word[0] + 1', () => {
    assert.deepEqual(map(words, word => word[0] + 1), ["g1", "c1", "t1", "m1", "t1"]);
  });

  it('returns ["gort", "cort", "tort", "mort", "tort"] from the callback words, word => word[0] + "ort"', () => {
    assert.deepEqual(map(words, word => word[0] + "ort"), ["gort", "cort", "tort", "mort", "tort"]);
  });
});