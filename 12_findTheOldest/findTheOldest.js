const findTheOldest = function(arr) {
    return arr.reduce((oldest, person) => {
        const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        const currentAge = getAge(person.yearOfDeath, person.yearOfBirth);
        return oldestAge < currentAge ? person : oldest;
    });
};

const getAge = function(death, birth) {
    if (!death) {
        death = new Date().getFullYear();
    } else {
        return death - birth;
    }
      
}

// Do not edit below this line
module.exports = findTheOldest;
