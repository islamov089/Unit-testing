const Calculator = require("./calc");

describe("Calculator", () => {
  test("Check the result 1 + 1 is equal to 2", () => {
    expect(Calculator.add(1, 1)).toBe(2);
  });
  test("Addition with string: 1 + '1' not equal to 2", () => {
    expect(() => Calculator.add(1, "1")).not.toBe(2);
  });

  test("Addition with non-numeric value: 1 + 'a' should throw error", () => {
    expect(() => Calculator.add(1, "a")).toThrowError();
  });

  test("Division by zero: 5 / 0 should throw error", () => {
    expect(() => Calculator.divide(5, 0)).toThrowError();
  });

  test("Multiplication with non-numeric value: 'a' * 'b' should throw error", () => {
    expect(() => Calculator.multiply("a", "b")).toThrowError();
  });

  test("Subtraction: 3 - 1 equals 2", () => {
    expect(Calculator.subtract(3, 1)).toBe(2);
  });

  test("Division: 8 / 4 equals 2", () => {
    expect(Calculator.divide(22, 2)).toBe(11);
  });

  test("Multiplication: 4 * 3 equals 12", () => {
    expect(Calculator.multiply(4, 3)).toBe(12);
  });
});
