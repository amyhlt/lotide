const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`😩😩😩Assertion Failed:  ${actual} !==${expected}`);
  }
};
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
              obj[key]=count;
        }
        count=0;
    }
    return obj;
}
const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true,"Amy":true, "Karima": true, "Fang": true, "Agouhanna": false });
  console.log(obj);
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], 0);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"],0);