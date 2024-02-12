const checkAgeInObject = require('./checkAge');

describe("checkAgeInObject function", () => {
  test("Check if all people are 18 years old or above", () => {
    const people = [
      { name: 'John', age: 16 },
      { name: 'Alice', age: 18 },
      { name: 'Bob', age: 21 }
    ];
    expect(checkAgeInObject(people)).toBe(false);
  });
});