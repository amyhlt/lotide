
function without(original,removal) {
  let a = [];
  for (let n of original)
    if (!(removal.includes(n))){
      a.push(n);
    }
  return a;
}
console.log(without([1,2,3], [1]));
module.exports = without;
