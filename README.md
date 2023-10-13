# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dustinader/lotide`

**Require it:**

`const _ = require('@dustinader/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: Counts letters in givin string and returns an object with keys per letter and values based on how many times they appeared. Example: "strings" = { s:2, t:1, r:1, i:1, n:1, g:1 }
* `countOnly(array, object)`: If key in object exists in array and keys value is true counts every reference in array of every key and returns the result as an object. 
Example: ["string", "string", "node"], { string: true } = { string: 2 }
* `findKey(object, callback)`: Checks the givin objects values of object where if callback determines the first value it reaches is true then returns its key.
* `findKeyByValue(object, string)`: Checks the givin values of object where the first value it comes across equals the same as the value givin then returns its key.
* `head(array)`: Returns the head of the givin array aka the first element.
* `tail(array)`: Return the entire array except the head/first-element.
* `middle(array)`: Returns the middle element of the array if odd. If the array length is even then returns the 2 elements in the middle of the array.
* `map(array, callback)`: Loops through every item in givin array using a callback function on each and returns the new array.
* `flatten(array)`: Takes every element in a nested array and puts them into a non-nested array.
* `letterPositions(array)`: Takes in a string and returns an object where each letter has an array of possitions where they would be.
* `takeUntil(array, callback)`: Loop through items in array and adding them to a new array until callback is true.
* `without(array1, array2)`: Removes all instances of every item in array1 with array2 items being ones to remove.