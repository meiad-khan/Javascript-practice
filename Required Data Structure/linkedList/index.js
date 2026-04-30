// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.lenght = 0;
//   }
//   append(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.lenght++;
//     return this;
//   }

//   prepend(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       //append as the first node.
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//       // this.tail = newNode;
//     }
//     this.lenght++;
//     return this;
//   }

//   insert(value, index) {
//     const newNode = new Node(value);
//     if (index < 0 || index > this.lenght) {
//       return console.error("Position out of range. ");
//     }
//     if (index === 0) {
//       return this.prepend(value);
//     }
//     if (index === this.lenght) {
//       return this.append(value);
//     }
//     let temp = this._traverseToIndex(index - 1);
//     newNode.next = temp.next;
//     temp.next = newNode;
//     this.lenght++;
//   }

//   remove(index) {
//     const leadingNode = this._traverseToIndex(index - 1);
//     console.log(leadingNode);
//     if (index < 0 || index >= this.lenght) {
//       return console.error("Invalid index to delete");
//     } else if (index === 0) {
//       this.lenght--;
//       return (this.head = this.head.next);
//     } else if (index === this.lenght - 1) {
//       leadingNode.next = null;
//       this.tail = leadingNode;
//       return this.lenght--;
//     } else {
//       leadingNode.next = leadingNode.next.next;
//       this.lenght--;
//     }
//   }

//   _traverseToIndex(index) {
//     let currentNode = this.head;
//     for (let i = 0; i < index; i++) currentNode = currentNode.next;
//     return currentNode;
//   }

//   print() {
//     let arr = [];
//     let temp = this.head;
//     while (temp) {
//       arr.push(temp.value);
//       temp = temp.next;
//     }
//     console.log(arr.join(" --> "), " -->  Null");
//   }
// }

// const linkedList = new LinkedList();
// linkedList.append(2).append(3).append(4);
// // linkedList.prepend(0);
// linkedList.insert(1, 0);
// linkedList.insert(5, 4);
// linkedList.remove(2);
// linkedList.print();
// console.log(linkedList.lenght);


class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor() {
    this.head = null;
    this.tail = null;
    this.lenght = 0;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }   
    this.lenght++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.lenght++;
  }

  insert(value, index) {
    if (index < 0 || index > this.lenght) {
      return console.error("Invalid position to insert");
    }
    const newNode = new Node(value);
    if (index === 0) {
      return this.prepend(value);
    } else if (index === this.lenght) {
      return this.append(value);
    } else {
      const leadingNode = this._traverseToIndex(index - 1);
      newNode.next = leadingNode.next;
      leadingNode.next = newNode;
      this.lenght++;
    }
  }

  remove(index) {
   if (index < 0 || index >= this.lenght) {
     return console.error("Invalid position to remove");
   }
    if (index === 0) {
      this.head = this.head.next;
      if (this.lenght === 1) {
        this.tail = null;
      }
      this.lenght--;
    }
    const leadingNode = this._traverseToIndex(index - 1);
    const nodeToRemove = leadingNode.next;
    leadingNode.next = nodeToRemove.next;
    if (leadingNode.next === null) {
      this.tail = leadingNode;
    }
    this.lenght--;
  }

  _traverseToIndex(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++)
      currentNode = currentNode.next;
    return currentNode;
  }

  print() {
    let temp = this.head;
    const arr = [];
    while (temp) {
      arr.push(temp.value);
      temp = temp.next;
    }
    console.log(arr.join(" --> "), " -->  null");
  }
}

const linkedList = new LinkedList();
linkedList.append(2);
linkedList.append(4);
linkedList.prepend(1);
linkedList.insert(3, 2);
linkedList.print();
console.log(linkedList.lenght);
linkedList.remove(3);
linkedList.print();
console.log(linkedList.lenght);
