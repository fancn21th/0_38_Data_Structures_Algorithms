import hasCycle from "./cycles-in-a-linked-list";
import { createLinkedListFromArray } from "../dsjs/utils/ListCreator";

let cycledLinkedList, notCycledLinkedList;

beforeEach(() => {
  notCycledLinkedList = createLinkedListFromArray([1, 2, 3]);
  cycledLinkedList = createLinkedListFromArray([1, 2, 3, 4, 5]);
  cycledLinkedList.tail.next = cycledLinkedList.getAt(3);
});

describe("detect a cycle in lined list", function() {
  test("check non cycled linked list", function() {
    const result = hasCycle(notCycledLinkedList);
    expect(result).toEqual(false);
  });

  test("check cycled linked list", function() {
    const result = hasCycle(cycledLinkedList);
    expect(result).toEqual(true);
  });
});
