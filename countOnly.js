
let obj={};
let count=0;
const countOnly = function(allItems, itemsToCount) {
    
    
    for (let key in itemsToCount) {
      if (itemsToCount[key] === true) {
            for (let a of allItems) {
                if (key === a) {
                    count++;
                }
            }
            if (count !== 0)
              obj[key] = count;
            else
            obj[key] = 0;
        }
        count = 0;
     }
     return obj;
}
module.exports = countOnly;
