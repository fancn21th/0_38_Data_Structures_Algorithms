const { createQueue } = require("../queue");

function createPriorityQueue() {
  const lowPriorityQueue = createQueue();
  const highPriorityQueue = createQueue();

  return {
    enqueue(item, isHighPriority = false) {
      isHighPriority
        ? highPriorityQueue.enqueue(item)
        : lowPriorityQueue.enqueue(item);
    },
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue();
      }
      return lowPriorityQueue.dequeue();
    },
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }
      return lowPriorityQueue.peek();
    },
    get length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
    }
  };
}

// const q = createPriorityQueue();

// q.enqueue("this is a bug");
// q.enqueue("this is a fix");
// q.enqueue("this is a issue");

// q.enqueue("emergancy issue!!!", true);

// console.log(q.peek());

module.exports = {
  createPriorityQueue
};
