const hasCycle = function(linkedList) {
  let slow = linkedList.head;
  let fast = linkedList.head.next;

  while (fast !== null && fast.next !== null) {
    if (fast === slow) {
      return true;
    }
    fast = fast.next ? fast.next.next : null;
    slow = slow.next;
  }

  return false;
};

export default hasCycle;
