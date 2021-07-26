const assertEqual = require("./assertEqual");
function head(arr) {

 if(arr.length>0)
   return arr[0];
 else 
   return null;
}
module.exports = head;


  