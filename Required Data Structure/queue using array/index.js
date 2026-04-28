class Queue{
  constructor() {
    this.items = [];
  }
  enqueue(value) { //O(1)
    this.items.push(value);
  }
  dequeue() { //O(n)
    if (this.isEmpty()) return undefined;
    return this.items.shift();
  }
  peek() { //O(1)
    if (this.isEmpty()) return undefined;
    return this.items[0];
  }
  isEmpty() { //O(1)
    return this.items.length === 0;
  }
  print() { //O(n)
    console.log(this.items.join("<--"));
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
console.log(queue.dequeue());
queue.print();
