const { sum, nativeNull } = require("./intro");

describe("Check function sum", () => {
  test("Sum should return sum of two numbers", () => {
    expect(sum(4, 6)).toBe(10);
    expect(sum(4, 6)).toEqual(10);
  });

  test("sum should return value correctly comparing to other", () => {
    expect(sum(2, 3)).toBeGreaterThan(4);
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
    expect(sum(2, 3)).toBeLessThan(6);
    expect(sum(2, 3)).toBeLessThanOrEqual(5);
  });

  test("Should sum 2 float numbers correctly", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe("Native null function", () => {
  test("should returun false value null", () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
  });
});
