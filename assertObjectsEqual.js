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
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed:  ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😩😩😩Assertion Failed:  ${inspect(actual)} !==${inspect(expected)}`);
  }
   
};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd1 = { c: "1", d: ["2", 3, 4] };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' });
assertObjectsEqual(cd,dc);
assertObjectsEqual(cd1,cd2);
assertObjectsEqual(cd1,dc);