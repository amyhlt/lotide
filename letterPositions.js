const letterPositions = function(sentence) {
  const results = {};
  let a = [];
  for (let e1 of sentence) {
    
    if (e1 !== " ") {
      for (let i = 0; i < sentence.length; i ++) {
        
        if (e1 === sentence.charAt(i)) {
            
          a.push(i);
        
        }
      }
        
      results[e1] = a;
      a = [];
    }
  }
  return results;
};
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`😩😩😩Assertion Failed:  ${actual} !==${expected}`);
  }
};
function eqArrays(arr1,arr2) {
  let num = 0;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i ++) {
      if (arr1[i] === arr2[i]) {
        num ++;
      }
    }
    if (num === arr1.length) {
      return true;
    } else
      return false;
    } else return false;
}
let assertArraysEqual = function(arr1,arr2) {
  return assertEqual(eqArrays(arr1,arr2),true);
};
console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("helloei"));
console.log(letterPositions(" "));
console.log(letterPositions("!"));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);