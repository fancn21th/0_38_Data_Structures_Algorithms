import LinkedList from "../LinkedList";

const createLinkedListFromArray = function(array) {
  let list = new LinkedList();

  array.forEach(function(item) {
    list.add(item);
  });

  return list;
};

export { createLinkedListFromArray };
