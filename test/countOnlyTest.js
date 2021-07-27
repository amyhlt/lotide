const countOnly = require("../countOnly");
const assertEqual = require("../assertEqual");
const assert = require('chai').assert;
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
 

  describe("#countOnly", () => {
    it("returns 1 ", () => {
        console.log(result1["Jason"]);
      assert.deepEqual(result1["Jason"], 1);
    });  
    
    it("returns 0 ", () => {
        console.log(result1["Karima"]);
      assert.deepEqual(result1["Karima"], 0);     
    });  
        
    it("returns 0 ", () => {         
      assert.deepEqual(result1["Agouhanna"],undefined);
     });  
  });
 
 