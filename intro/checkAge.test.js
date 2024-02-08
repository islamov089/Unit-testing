const checkCondition = require('./checkAge');

describe("checkCondition function", () => {
  test("Check if all people are 18 years old or above", () => {
    const people = [
      { name: 'John', age: 16 },
      { name: 'Alice', age: 18 },
      { name: 'Bob', age: 21 }
    ];
    expect(checkCondition(people)).toBe(false);
  });
});
