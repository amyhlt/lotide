const assertEqual = require("../assertEqual");
const head = require("../head");
const tail = require("../tail");
const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
// TEST CODE for head
assertEqual(head([]), null);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// Test Case for tail
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words).length, 2);
// Test Case for eqArrays
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 
// Test Case for asserteqArrays

assertArraysEqual([],[]);
assertArraysEqual([1, 2, 3],[1, 2, 3]);
assertArraysEqual([1, 2, 3],[5, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
