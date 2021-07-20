let tail = function(arr) {

  let newArr = [];
  for (let i = 1; i < arr.length; i ++) {
    newArr.push(arr[i]);
  }

  return newArr;
};
const assertEqual = function(actual, expected) {
   
  if (actual === expected) {
    console.log(`😃😃😃Assertion Passed: ${actual}  === ${expected}`); 
  }
  else {
     console.log(`😩😩😩Assertion Failed:  ${actual} !==${expected}`);
  }
};
// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words).length, 3);