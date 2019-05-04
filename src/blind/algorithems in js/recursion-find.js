const items = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11]]];

const findX = (x, items) => {
  let status = "not found";
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (Array.isArray(item)) {
      status = findX(x, item);
    }
    if (item === x) {
      status = `${x} is found`;
    }
    if (status === `${x} is found`) {
      return status;
    }
  }
  return status;
};

console.log(findX(6, items));
