const assertEqual = require('../assertEqual');
const tail = require('../tail');

// tail test cases
console.log("-- tail test cases --")
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);
assertEqual(tail([1]), []);
assertEqual(tail([]), []);
