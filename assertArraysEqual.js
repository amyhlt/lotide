const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");
 
function assertArraysEqual(arr1,arr2){
  let returnVal = eqArrays(arr1,arr2);
  if (returnVal) {
   
    return assertEqual(eqArrays(arr1,arr2),true);
  }
  else {
    
    return assertEqual(eqArrays(arr1,arr2),false);
  }
 
}
module.exports = assertArraysEqual;