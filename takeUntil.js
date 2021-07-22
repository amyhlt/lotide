const takeUntil = function(array, callback) {
    // ...
  for (let i = 0; i < array.length; i ++) {
    if (callback(array[i])) {
      return array.slice(0,i);
    }

  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log('---');
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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
    } else 
        return false;
}
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃Assertion Passed: ${actual}  === ${expected}`); 
  } else {
    console.log(`😩😩😩Assertion Failed:  ${actual} !==${expected}`);
  }
};
function assertArraysEqual(arr1,arr2) {
  return assertEqual(eqArrays(arr1,arr2),true);
}
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2,[ "I've", 'been', 'to', 'Hollywood']);