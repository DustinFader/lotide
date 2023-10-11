const assertEqual = require('../assertEqual');

// assertEqual Test code
console.log("-- assertEqual Test code --")
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("", "");
assertEqual(1, 2);
assertEqual(NaN, NaN);
assertEqual(undefined, undefined);
assertEqual([1, 2], [2, 1]);
assertEqual([1, 2], [1, 2]);