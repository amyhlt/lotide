const eqArrays = function(arr1,arr2) {
  let num = 0;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i ++) {
      if (arr1[i] === arr2[i]) {
        num++;
      }
    }
    if (num === arr1.length) {
      return true;
    } else
      return false;
  } else {
    return false;
  }
};
const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`😩😩😩Assertion Failed:  ${actual} !==${expected}`);
  }
};
let middle = function(arr) {
  const len = arr.length;
  let arr1 = [];
  let arr2 = [];
  if (len === 1 || len === 2) {
    return "No middle element";
  } else if (len % 2 === 0) {
    arr1.push(arr[len / 2 - 1],arr[len / 2]);
    return arr1;
  } else if (len % 2 === 1) {
    arr2.push(arr[Math.floor(len / 2)]);
    return arr2;
  }

};
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual(eqArrays(middle([1, 2, 3]),[2]),true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]),[3]),true);
assertArraysEqual(eqArrays(middle([1, 2, 3,4]),[2,3]),true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]),[2]),true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]),[3,4]),true);