const head = require("../head");
const assertEqual = require("../assertEqual");
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns '' for ['']", () => {
    assert.strictEqual(head(['']), ''); 
  });
  it("returns 1 for [1, '', 3]", () => {
    assert.strictEqual(head([1, '', 3]), 1);
  });
  
});




