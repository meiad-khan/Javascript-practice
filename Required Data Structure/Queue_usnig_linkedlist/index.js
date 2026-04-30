class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  dequeue() {
    if (!this.head) return undefined;

    const removed = this.head;
    this.head = this.head.next;

    if (!this.head) this.tail = null;

    this.length--;
    return removed.value;
  }

  peek() {
    return this.head?.value;
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
queue.enqueue(1);
// queue.enque(2);
// queue.enque(3);
queue.print();
console.log(queue.length);
queue.dequeue();
queue.print();
console.log(queue.length);
console.log(queue.tail);
// console.log(queue.peek());

