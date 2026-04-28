
class Stack{
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
  }
  pop() {
    if (this.isEmpty()) return undefined;
    return this.items.pop();
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    console.log(this.items.reverse().join("-->")); //--> here reverse mutated the main items array. this will hamper the stack basic property... reverse() works inside the same array memory.
    console.log(this.items.slice().reverse().join("-->"));
    // slice Creates a new copied array. it is Non-mutating method (returns new array).
  }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.isEmpty());
stack.print();
console.log(stack.pop());