const findTheOldest = function(array) {
    let oldestAge = 0
    let oldest;
    for (const person of array) {
        let age = 0;
        if (person.yearOfDeath === undefined) {
            let today = new Date()
            age = today.getFullYear() - person.yearOfBirth;
        }
        else age = person.yearOfDeath - person.yearOfBirth;
        if (age > oldestAge) {
            oldestAge = age;
            oldest = person;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
