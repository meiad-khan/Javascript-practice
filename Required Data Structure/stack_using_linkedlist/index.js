class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
       this.head = newNode;
       this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;     
  }

  pop() {
    if (!this.head) {
      return console.error("Stack is already empty");
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return undefined;
    }
   
    let leadingNode = this.head;
    while (leadingNode.next.next !== null) {
      leadingNode = leadingNode.next;
    }
    leadingNode.next = leadingNode.next.next;
    if (leadingNode.next === null) {
      this.tail = leadingNode;
    }
    this.length--;

  }

  peek() {
    if (!this.head) {
      return console.error("Stack is empty");
    }
    return this.tail.value;
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