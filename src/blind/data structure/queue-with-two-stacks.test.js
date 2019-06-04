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
  });
});
