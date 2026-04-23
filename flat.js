
//turning nested array into a single normal array using flat method.

const arr = [3, 5, 3, 4, 5, [4, 6, 7, [4, 5, 4]]];

const flatArray = arr.flat(Infinity);

console.log(flatArray);