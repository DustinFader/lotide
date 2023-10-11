const assert = require('chai').assert;
const tail = require('../tail');

// tail test cases
// console.log("\n-- tail test cases --")
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words));
// assertEqual(words.length, 3);
// assertEqual(tail([1]), []);
// assertEqual(tail([]), []);

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