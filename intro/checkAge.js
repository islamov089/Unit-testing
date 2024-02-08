function checkCondition(people) {
    return people.every(person => person.age >= 18);
  }
  
  
  module.exports = checkCondition;
  