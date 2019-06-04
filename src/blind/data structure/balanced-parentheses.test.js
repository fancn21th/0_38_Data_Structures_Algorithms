import isBalanced from "./balanced-parentheses";

describe("balanced parrentheses testing", function() {
  test("{}()[{}]", function() {
    const testStr = "{}()[{}]";
    const result = isBalanced(testStr);
    expect(result).toEqual(true);
  });

  test("({[]})", function() {
    const testStr = "({[]})";
    const result = isBalanced(testStr);
    expect(result).toEqual(true);
  });
});

describe("unbalanced parrentheses testing", function() {
  test("[({)}]", function() {
    const testStr = "[({)}]";
    const result = isBalanced(testStr);
    expect(result).toEqual(false);
  });

  test("()}[]", function() {
    const testStr = "()}[]";
    const result = isBalanced(testStr);
    expect(result).toEqual(false);
  });
});
