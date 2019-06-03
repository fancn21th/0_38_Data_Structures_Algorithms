import isBalanced from "./balanced-parentheses";

test("[]", function() {
  const testStr = "[]";
  const result = isBalanced(testStr);
  expect(result).toEqual(true);
});
