class Calculator {
  static add(a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Both inputs must be numbers.");
    }
    return a + b;
  }

  static subtract(a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Both inputs must be numbers.");
    }
    return a - b;
  }

  static divide(a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Both inputs must be numbers.");
    }
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }

  static multiply(a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Both inputs must be numbers.");
    }
    return a * b;
  }
}

console.log(Calculator.add(3, 4)); //7
console.log(Calculator.subtract(19, 4)); //15
console.log(Calculator.multiply(2, 4)); //8
console.log(Calculator.divide(5, 5)); //1

module.exports = Calculator;
