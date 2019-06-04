import Queue from "./queue-with-two-stacks";

describe("enqueue", function() {
  let q;

  beforeEach(() => {
    q = new Queue();
  });

  test("enqueue 1,2,3", function() {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.peek()).toBe(1);
    expect(q.dequeue()).toBe(1);
    expect(q.dequeue()).toBe(2);
    expect(q.dequeue()).toBe(3);
  });
});

describe("enqueue, dequeue then enqueue", function() {
  let q;

  beforeEach(() => {
    q = new Queue();
  });

  test("enqueue 1,2 dequeue 1 and then enqueue 3,4", function() {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.dequeue();
    q.enqueue(4);
    q.enqueue(5);
    expect(q.peek()).toBe(2);
    expect(q.dequeue()).toBe(2);
    expect(q.dequeue()).toBe(3);
    expect(q.dequeue()).toBe(4);
  });
});
