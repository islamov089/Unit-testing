function checkAgeInObject(people) {
    return people.every(person => person.age >= 18);
  }
   module.exports = checkAgeInObject