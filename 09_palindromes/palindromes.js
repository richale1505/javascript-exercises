const palindromes = function (str) {
    let newArr = [];
    let toLower = Array.from(str.replace(/[.,!]/g, "").toLowerCase().replace(/ /g, ''));

    toLower.reduceRight((total, item) => newArr.push(item), 0);
    
    return newArr.toString().replace(/[,]/g, "") === toLower.toString().replace(/[,]/g, "");
};

/* Palindromes pseudocode
    1. create a funtion that takes a string.
    2. take that string and remove everything besided letter and number values
    3. push char values to an array
    4. reverse the position of the values in the array.
    5. return true if equal and false otherwise
*/

// Do not edit below this line
module.exports = palindromes;
