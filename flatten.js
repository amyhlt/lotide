function flatten(arr) {
  let b = [];
  for (let a of arr) {
    if (Array.isArray(a)) {
      for (let j = 0; j < a.length;j ++)
        b.push(a[j]);
    }
    else {
      b.push(a);
    }
}
return b;
}
console.log(flatten([1, 2, [3, 4], 5, [6]]));