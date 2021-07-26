
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
module.exports = middle;
