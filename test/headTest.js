const assertEqual = require('../assertEqual');
const head = require('../head');

// head test cases
console.log("-- head test cases --")
assertEqual(head([1, 2, 3]), 1);
assertEqual(head(["bad", "good", "neutral", "Happenstance"]), "bad");
assertEqual(head([, 0]),); //eslint may say this is wrong but i wanted to test it this way anyways.
assertEqual(head([0]), 0);