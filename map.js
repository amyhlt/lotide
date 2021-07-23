let  words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
return results;
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
      }
      else
        return false;
    }
    else 
      return false;
  }
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`😃😃😃Assertion Passed: ${actual}  === ${expected}`); 
    }
    else {
      console.log(`😩😩😩Assertion Failed:  ${actual} !==${expected}`);
    }
  };
function assertArraysEqual(arr1,arr2) {
    return assertEqual(eqArrays(arr1,arr2),true);
}
let results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);

words = ["ground", " ", "to", "major", "tom"];
results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1,[ 'g', '', 't', 'm', 't' ]);

words = [];
results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual([],[ ]);