const reverseString = function(str) {
    const strRev = str.split('').reverse().join('');
    return strRev;
};


// Do not edit below this line
module.exports = reverseString;

// get a string from the test js
// seperate the string into single characters and store them in an array
// reverse the position of the chars in the array and return them.