class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    if (this.head === null) {
      return true;
    }

    return false;
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value, null, this.head);
      this.tail = this.head;
      return;
    }
    this.head.prev = new Node(value, null, this.head);
    this.head = this.head.prev;
  }

  append(value) {
    let cur = this.head;
    let prev = null;

    if (cur === null) {
      this.head = new Node(value, null, null);
      this.tail = this.head;
      return;
    }

    while (cur !== null) {
      prev = cur;
      cur = cur.next;
    }

    prev.next = new Node(value, this.tail, null);
    this.tail = prev.next;
  }

  setHead(index) {
    let cur = this.head;

    for (let i = 0; i < index; i++) {
      if (cur === null) {
        return false;
      }
      cur = cur.next;
    }

    this.head = cur;
    cur.prev = null;
    return true;
  }

  access(index) {
    let cur = this.head;

    for (let i = 0; i < index; i++) {
      if (cur === null) {
        return undefined;
      }
      cur = cur.next;
    }

    return cur.value;
  }

  insert(index, value) {
    let cur = this.head;
    let prev = null;

    if (index === 0) {
      this.prepend(value);
      return true;
    }

    for (let i = 0; i < index; i++) {
      if (cur === null) {
        return false;
      }
      prev = cur;
      cur = cur.next;
    }

    prev.next = new Node(value, cur.prev, cur);
    cur.prev = prev.next;
    return true;
  }

  remove(index) {
    let cur = this.head;
    let prev = null;

    if (index === 0) {
      if (cur !== null) {
        this.head = this.head.next;
        this.head.prev = null;
        return true;
      }
      return false;
    }

    for (let i = 0; i < index; i++) {
      if (cur === null) {
        return false;
      }
      prev = cur;
      cur = cur.next;
    }

    prev.next = cur.next;
    cur.next.prev = prev;
  }

  print() {
    let cur = this.head;
    let result = '';

    if (cur === null) {
      console.log('[]');
      return;
    }

    while (cur !== null) {
      result += `${cur.value} `;
      cur = cur.next;
    }

    console.log(`[${result}]`);
  }

  printInv() {
    let cur = this.tail;
    let result = '';

    if (cur === null) {
      console.log('[]');
      return;
    }

    while (cur !== null) {
      result += `${cur.value} `;
      cur = cur.prev;
    }

    console.log(`[${result}]`);
  }
}

const myList = new DoublyLinkedList();
myList.print();
myList.printInv();

for (let i = 0; i < 10; i++) {
  myList.append(i + 1);
}
myList.print();
myList.printInv();

for (let i = 0; i < 10; i++) {
  myList.prepend(i + 1);
}
myList.print();
myList.printInv();

const value = myList.access(3);
console.log(`myList.access(3) = ${value}`);

myList.insert(8, 128);
myList.print();
myList.printInv();

myList.remove(4);
myList.print();
myList.printInv();

myList.setHead(10);
myList.print();
myList.printInv();
