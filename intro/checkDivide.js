function checkToDivide(num) {
  return typeof num === "number" && num % 3 === 0 && num % 5 === 0;
}

console.log(checkToDivide(15));
console.log(checkToDivide(30));

module.exports = checkToDivide;
