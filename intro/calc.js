class Calculator {
  validateInput(a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Both inputs must be numbers.");
    }
  }

  add(a, b) {
    this.validateInput(a, b);
    return a + b;
  }

  subtract(a, b) {
    this.validateInput(a, b);
    return a - b;
  }

  divide(a, b) {
    this.validateInput(a, b);
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }

  multiply(a, b) {
    this.validateInput(a, b);
    return a * b;
  }
}

module.exports = new Calculator();
