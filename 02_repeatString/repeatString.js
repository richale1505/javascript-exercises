const repeatString = function(string, number) {
    let str = [];
    const errorMsg = 'ERROR';

    if (number < 0) {
        return errorMsg;
    } else {
        for (let i = 0; i < number; i++){
            str.push(string);
        }
        return str.toLocaleString().replaceAll(',','');
    }
    
};

// Do not edit below this line
module.exports = repeatString;
