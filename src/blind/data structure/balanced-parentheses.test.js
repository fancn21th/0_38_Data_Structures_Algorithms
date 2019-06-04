import isBalanced from "./balanced-parentheses";

describe("balanced parrentheses testing", function() {
  test("[]", function() {
    const testStr = "[]";
    const result = isBalanced(testStr);
    expect(result).toEqual(true);
  });

  test("[{]", function() {
    const testStr = "[{]";
    const result = isBalanced(testStr);
    expect(result).toEqual(false);
  });
});
