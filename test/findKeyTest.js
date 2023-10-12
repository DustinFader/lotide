const findKey = require("../findKey");
const assertEqual = require("../assertEqual");

// test cases
let test = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "Alohora":   { stars: 2 },
  "Kudinshaw": { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "Alohora"

assertEqual(test, "Alohora");
assertEqual(findKey({path: "court", pinch: "jork", mort: "fort"}, x => x === "port"), undefined);
assertEqual(findKey({path: "court", pinch: "jork", mort: "fort"}, x => x === "jork"), "pinch");
assertEqual(findKey({treb: 2, "pork": "2", 1: "fort"}, x => x === "2"), "pork");