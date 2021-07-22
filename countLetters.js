const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`😃😃😃Assertion Passed: ${actual}  === ${expected}`);
    } else {
      console.log(`😩😩😩Assertion Failed:  ${actual} !==${expected}`);
    }
}; 
let obj={};
let count=0;
let countLetters = function(str) {
   
   
    for (let e1 of str) {
        if (e1 !== " ") {
          for (let e2 of str) {
            if (e1 === e2 ) {
              count++;
            }
          }
          obj[e1] = count;
          count = 0;
        }
        
    }
   return obj;
}
let result=countLetters("lighthouse in the house");
console.log(result);
