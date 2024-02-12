function checkToDivide(num) {
  return typeof num === "number" && num % 3 === 0 && num % 5 === 0;
}

module.exports = checkToDivide;