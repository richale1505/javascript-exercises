const removeFromArray = function(array, ...args) {
    const newArray = [];
    array.forEach(item => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

// REMOVE MULTIPLE OF THE SAME VALUE

// for every item in array check if they are included in the args. 
// if not included push the item into a new array. return the new array.
