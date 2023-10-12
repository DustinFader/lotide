const map = require("../map");

// test cases
const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["clean", "the", "pateo", "to", "not", "slip", "again"];
console.log(map(words, word => word[0]));

// assertArrayEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
// assertArrayEqual(map(words1, word => word[1]), ["l", "h", "a", "o", "o", "l", "g"]);
// assertArrayEqual(map(words, word => word[0] + 1), ["g1", "c1", "t1", "m1", "t1"]);
// assertArrayEqual(map(words, word => word[0] + "ort"), ["gort", "cort", "tort", "mort", "tort"]);