function eqArrays(arr1,arr2){
  let num = 0;
  if(arr1.length === arr2.length){
    for(let i = 0; i < arr1.length; i ++){
      if(arr1[i] === arr2[i]){
          num ++;
        }
     }
     if(num === arr1.length){
         return true;
     }
     else
      return false;
  
  
   }
   else 
    return false;
  }
if (eqArrays([1, 2, 3], [1, 2, 3])){
  console.log("The two arrays are equal.");
}
else{
 console.log("The two arrays are not equal.");
}