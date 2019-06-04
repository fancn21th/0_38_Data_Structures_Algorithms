class Queue {
  constructor() {
    this.newestOnTop = [];
    this.oldestOnTop = [];
  }
  enqueue(item) {
    this.newestOnTop.push(item);
  }
  shiftStacks() {
    if (this.oldestOnTop.length === 0) {
      while (this.newestOnTop.length > 0) {
        this.oldestOnTop.push(this.newestOnTop.pop());
      }
    }
  }
  peek() {
    this.shiftStacks();
    return this.oldestOnTop[this.oldestOnTop.length - 1];
  }
  dequeue() {
    this.shiftStacks();
    return this.oldestOnTop.pop();
  }
}

export default Queue;
