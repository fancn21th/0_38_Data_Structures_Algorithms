import hasCycle from "./cycles-in-a-linked-list";
import { createLinkedListFromArray } from "../dsjs/utils/ListCreator";

let cycledLinkedList, notCycledLinkedList;

beforeEach(() => {
  notCycledLinkedList = createLinkedListFromArray([1, 2, 3]);
  cycledLinkedList = createLinkedListFromArray([1, 2, 3, 4, 5]);
});

describe("detect a cycle in lined list", function() {
  test("check non cycled linked list", function() {
    expect(notCycledLinkedList.head.data).toBe(1);
    expect(notCycledLinkedList.head.next.data).toBe(2);
    expect(notCycledLinkedList.head.next.next.data).toBe(3);
  });
});
