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
function without(original,removal) {
  let a = [];
  for (let n of original)
    if (!(removal.includes(n))){
      a.push(n);
    }
  console.log(a);
}
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);