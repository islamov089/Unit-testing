function expect(value) {
  return {
    toBe: (exp) => {
      if (value === exp) {
        console.log("Success!");
      } else {
        console.error(`Value is ${value}, but expectation is ${exp}`);
      }
    },
  };
}

const sum = (a, b) => a + b;

const nativeNull = () => null;

expect(sum(1, 4)).toBe(5);

module.exports = { sum, nativeNull };
