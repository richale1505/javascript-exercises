const sumAll = function(num1, num2) {
    let numArray = [];
    let number = num1;

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    } else {
        let sum = 0;

        if (num2 > num1){
            for (let i = 0; i < num2; i++) {
                numArray.push(number);
                number = number + 1;
            }
            for (i = 0; i < numArray.length; i++) {
                sum += numArray[i];
            }
        } else if (num2 < num1) {
            for (let i = num1 + 1; i > num2; i--) {
                numArray.push(number);
                number = number - 1;
            }
            for (i = 0; i < numArray.length; i++) {
                sum += numArray[i];
            }
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
