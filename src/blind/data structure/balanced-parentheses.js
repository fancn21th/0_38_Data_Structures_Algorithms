const match = {
  "]": "[",
  "}": "{",
  ")": "("
};

const openTerm = ["{", "[", "("];
const closeTerm = ["}", "]", ")"];

const isBalanced = function(expression) {
  const arr = expression.split("");
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (openTerm.includes(item)) {
      stack.push(item);
    } else {
      const isCloseTerm = closeTerm.includes(item);
      if (isCloseTerm) {
        if (stack.length === 0 || stack.pop() !== match[item]) {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
};

export default isBalanced;
