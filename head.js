function head(arr) {

 if(arr.length>0)
   return arr[0];
 else 
   return null;
}
const assertEqual = function(actual, expected) {

    if (actual === expected) {
  
      console.log(`😃😃😃Assertion Passed: ${actual}  === ${expected}`); 
  
    }
    else {
  
      console.log(`😩😩😩Assertion Failed:  ${actual} !==${expected}`);
      
    }
  };
  
  // TEST CODE
assertEqual(head([]), null);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");