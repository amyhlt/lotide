
const without = require("../without");

const assert = require('chai').assert;

describe("#without", () => {
    it("returns [2,3] for ([1, 2, 3],[1])", () => {
      assert.deepEqual(without([1,2,3], [1]),[2,3]);
    });
    it("returns YoYo Lighthouse Labs for ([YoYo Lighthouse Labs],[labs]) " , () => {
      assert.deepEqual(without(["Yo Yo", "Lighthouse", "Labs"], [ 'Labs' ]),["Yo Yo", "Lighthouse"]); 
    });
    it("returns ['1','2'] for (['1', '2', '3'], [1, 2, '3']))", () => {
      assert.deepEqual((without(["1", "2", "3"], [1, 2, "3"])),['1','2']); 
    });
    it("returns [1,3] for ([1, '', 3],[''])", () => {
      assert.deepEqual(without([1,'',3], [''] ),[1,3]);
    });
  });

