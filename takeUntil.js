const takeUntil = function(array, callback) {
    // ...
  for (let i = 0; i < array.length; i ++) {
    if (callback(array[i])) {
      return array.slice(0,i);
    }

  }
}
//console.log(takeUntil( ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','));
module.exports = takeUntil;
