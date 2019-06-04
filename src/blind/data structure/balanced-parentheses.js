const tokens = {
  "[": "]",
  "{": "}",
  "(": ")"
};

const isOpenTerm = function(char) {
  return Object.keys(tokens).includes(char);
};

const termsMatch = function(openTerm, closeTerm) {
  return tokens[openTerm] === closeTerm;
};

const isBalanced = function(expression) {
  const arr = expression.split("");
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (isOpenTerm(item)) {
      stack.push(item);
    } else {
      if (stack.length === 0 || !termsMatch(stack.pop(), item)) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

export default isBalanced;
