const findTheOldest = function(people) {

    const year = new Date().getFullYear()
    let oldestPerson = {}
    let oldestAge = 0

    for (const person of people) {
        let age = 0;

        if (person.yearOfDeath === undefined) {
            age = year - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }

        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = person;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
