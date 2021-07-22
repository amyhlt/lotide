const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`😩😩😩Assertion Failed:  ${actual} !==${expected}`);
  }
};
const eqObjects = function(object1, object2) {
  let count = 0;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (object1[key] === object2[key]) {
        count++;
      }
      if (Array.isArray(object1[key]) && eqArrays(object1[key],object2[key])) {
        count ++;
      }
    }
    if (count === Object.keys(object1).length) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
const eqArrays = function(arr1,arr2) {
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
};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd1 = { c: "1", d: ["2", 3, 4] };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false);
assertEqual(eqObjects(dc, cd2),false);
assertEqual(eqObjects(cd1, cd2),true);
assertEqual(eqObjects(cd, dc),true);