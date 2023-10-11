const assertEqual = require('../assertEqual')
const head = require('../head')

// assertEqual Test code
console.log("\n-- assertEqual Test code --")
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("", "");
assertEqual(1, 2);
assertEqual(NaN, NaN);
assertEqual(undefined, undefined);
assertEqual([1, 2], [2, 1]);
assertEqual([1, 2], [1, 2]);

//head test cases
console.log("\n-- head test cases --")
assertEqual(head([1, 2, 3]), 1);
assertEqual(head(["bad", "good", "neutral", "Happenstance"]), "bad");
assertEqual(head([, 0]),); //eslint may say this is wrong but i wanted to test it this way anyways.
assertEqual(head([0]), 0);
