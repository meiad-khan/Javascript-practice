
//stateless vs statefull


//In javascript Function is stateless
const counter = (count) => {
  let num = 0;
  num += count;
  return num;
} // for every call javascript create a new lexical environment. Function don't hold the previous value.

// console.log(counter(3));
// console.log(counter(2)); 


// But object is stateful
const increaser = {
  count: 0,
  add(amount) {
    this.count += amount;
  },
  print() {
    console.log(this.count);
  }
}
increaser.add(3);
increaser.add(2);   //Object hold the previous value, that's why ans is 5.
increaser.print();