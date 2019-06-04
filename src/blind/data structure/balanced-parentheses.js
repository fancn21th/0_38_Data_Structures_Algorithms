const match = {
  "]": "[",
  "}": "{",
  ")": "("
};

const isBalanced = function(expression) {
  const arr = expression.split("");
  const stack = [];
  arr.forEach(function(item) {
    const matchedItem = match[item];
    const lastItem = stack[stack.length - 1];
    if (matchedItem && lastItem === matchedItem) {
      stack.pop();
    } else {
      stack.push(item);
    }
  });
  return stack.length === 0;
};

export default isBalanced;
