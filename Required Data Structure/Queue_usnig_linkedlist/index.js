class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue{
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  enque(value) {
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

  deque() {
    if (!this.head) {
      return console.error("Queue is already empty");
    }
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.length--;
  }
  peek() {
    if (this.length === 0) {
      return console.error("Queue is empty");
    }
    return this.head.value;
  }

  print() {
    const arr = [];
    let temp = this.head;
    while (temp) {
      arr.push(temp.value);
      temp = temp.next;
    }
    console.log(arr.join(" <-- ")," <-- null");
  }
}

const queue = new Queue();
queue.enque(1);
// queue.enque(2);
// queue.enque(3);
queue.print();
console.log(queue.length);
queue.deque();
queue.print();
console.log(queue.length);
console.log(queue.tail);
// console.log(queue.peek());

