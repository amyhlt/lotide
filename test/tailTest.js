const tail = require("../tail");

const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 2,3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });
  it("returns Lighthouse Labs for YoYo Lighthouse Labs " , () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), [ 'Lighthouse', 'Labs' ]); 
  });
  it("returns '' for ['']", () => {
    assert.deepEqual(tail(''), []); 
  });
  it("returns ['',3] for [1, '', 3]", () => {
    assert.deepEqual(tail([1,'',3]), ['',3] );
  });
});