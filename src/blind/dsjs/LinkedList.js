import Node from "./Node";

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  add(element) {
    const newNode = new Node(element);
    if (!this._head) this._head = newNode;
    if (!this._tail) {
      this._tail = newNode;
    } else {
      this._tail.next = newNode;
      this._tail = newNode;
    }
    this._size++;
  }

  getAt(element) {
    let current = this._head;
    while (current.next) {
      if (current.data === element) {
        return current;
      }
      current = current.next;
    }
  }

  // insertAt(element, location)
  // removeFrom(location)
  // removeElement(element)

  // Helper Methods
  // isEmpty
  get head() {
    return this._head;
  }
  get tail() {
    return this._tail;
  }
  get size() {
    return this._size;
  }
  // PrintList
}

export default LinkedList;
