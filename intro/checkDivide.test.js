const divideFunction = require("./checkDivide");

describe("isDivisibleBy3And5 function", () => {
  test("Check the result for 3", () => {
    expect(divideFunction(3)).toBe(false);
  });

  test("Check the result for 5", () => {
    expect(divideFunction(5)).toBe(false);
  });

  test("Check the result for 3 and 5", () => {
    expect(divideFunction(3)).toBe(false);
    expect(divideFunction(5)).toBe(false);
  });
  test("Check the result for 15 and 15", () => {
    expect(divideFunction(15)).toBe(true);
    expect(divideFunction("15")).toBe(false);
  });
});
