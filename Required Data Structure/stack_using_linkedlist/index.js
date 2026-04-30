class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) { // O(1)
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  pop() { // O(1)
    if (!this.head) return undefined;
    const removed = this.head;
    this.head = this.head.next;
    this.length--;
    return removed.value;
  }

  peek() { // O(1)
    return this.head?.value;
  }
  print() {
    const arr = [];
    let temp = this.head;
    while (temp) {
      arr.push(temp.value);
      temp = temp.next;
    }
    console.log(arr.join(" --> "), " --> null");
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
console.log(stack.length);
stack.pop();
stack.print();
console.log(stack.length);
// console.log(stack.head, stack.tail);
console.log(stack.peek());