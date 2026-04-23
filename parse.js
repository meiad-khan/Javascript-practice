// console.log('hello');
const age = parseInt('50f');
const weight = parseInt('9twenty');
const address = parseInt('tom60');
console.log(age, weight, address);
// console.log('test'=='TEST');
// console.log(1);

// if (0) {
//   console.log("yes i am truth value");
// } else {
//   console.log('No, I am falsy value');
// }


if ('0') {   //-->non-empty string treat as a truthy value;
  console.log("yes i am truth value");
} else {
  console.log("No, I am falsy value");
}