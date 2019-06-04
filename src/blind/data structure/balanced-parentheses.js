const match = {
  "]": "[",
  "}": "{",
  "(": ")"
};

const isBalanced = function(expression) {
  const arr = expression.split("");
  const stack = [];
  arr.forEach(function(item) {
    if (match[item] && stack[stack.length - 1] === match[item]) {
      stack.pop();
    } else {
      stack.push(item);
    }
  });
  return stack.length === 0;
};

export default isBalanced;
